.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= beantown_admin
version ?= $(shell jq .version package.json)

sass:
		sass ${PWD}/src/sass/jal.sass ${PWD}/dist/public/css/style.css
		sass ${PWD}/src/sass/styles.sass ${PWD}/dist/public/css/styles.css

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

publish: dev_build
		docker tag $(image_name):$(version) $(dockerhub)/$(image_name):$(version)
		docker push $(dockerhub)/$(image_name):$(version)
