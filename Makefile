.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= beantown_admin
version ?= $(shell jq .version package.json)
port ?= 3033

merch_host ?= $(shell docker inspect merch_api | jq .[0].NetworkSettings.Networks.bridge.IPAddress || echo "no-container")
food_host ?= $(shell docker inspect menu_api | jq .[0].NetworkSettings.Networks.bridge.IPAddress | tr -d '"' || echo "no-container")
auth_host ?= $(shell docker inspect auth_api | jq .[0].NetworkSettings.Networks.bridge.IPAddress || echo "no-container")
food_url ?= http://$(food_host):5004

sass:
		sass ${PWD}/src/sass/jal.sass ${PWD}/dist/public/css/style.css

host:
		echo $(merch_host)
		echo $(food_host)
		echo $(auth_host)

stop:
		docker rm -f $(image_name) || true

prod_build: sass
		docker build \
			-t $(image_name):$(version) \
			--build-arg square_app_id=${SQUARE_APP_ID} \
			--build-arg node_env=production .

dev_build: sass
		docker build \
			-t $(image_name):$(version) \
			--build-arg square_app_id=${SQUARE_APP_ID} \
			--build-arg node_env=development .

start:
		docker run \
			-d \
			--name $(image_name) \
			--restart always \
			-p "$(port):$(port)" \
			-v "${PWD}/dist/public/css:/app/dist/public/css" \
			-v "${PWD}/dist/public/images:/app/dist/public/images" \
			-e MERCH_API_HOST=$(merch_host) \
			-e FOOD_API_URL=$(food_url) \
			-e AUTH_API_HOST=$(auth_host) \
			-e API_USER=${API_USER} \
			-e API_PW=${API_PW} \
			$(image_name):$(version)

publish: build
		docker tag $(image_name):$(version) $(dockerhub)/$(image_name):$(version)
		docker push $(dockerhub)/$(image_name):$(version)

postgres:
		helm upgrade --install postgres bitnami/postgresql
