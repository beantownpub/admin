.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= merch_mgmt
version ?= $(shell jq .version package.json)
port ?= 3033

merch_host ?= $(shell docker inspect merch_api | jq .[0].NetworkSettings.Networks.bridge.IPAddress || echo "no-container")
auth_host ?= $(shell docker inspect auth_api | jq .[0].NetworkSettings.Networks.bridge.IPAddress || echo "no-container")

sass:
		sass ${PWD}/src/sass/jal.sass ${PWD}/dist/public/css/style.css

host:
		echo $(merch_host)

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
			-e AUTH_API_HOST=$(auth_host) \
			-e SQUARE_LOCATION_ID=${SQUARE_LOCATION_ID} \
			-e SQAURE_ACCESS_TOKEN=${SQAURE_ACCESS_TOKEN} \
			-e API_USER=jalbot \
			-e API_PW=${API_PW} \
			$(image_name):$(version)

publish: build
		docker tag $(image_name):$(version) $(dockerhub)/$(image_name):$(version)
		docker push $(dockerhub)/$(image_name):$(version)
