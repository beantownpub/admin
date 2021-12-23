.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= beantown_admin
version ?= $(shell jq .version package.json)
hash = $(shell git rev-parse --short HEAD)

ifeq ($(env),dev)
	image_tag = "$(version)-$(hash)"
else
	image_tag = $(version)
endif

sass:
		sass ${PWD}/src/sass/jal.sass ${PWD}/dist/public/css/style.css
		sass ${PWD}/src/sass/styles.sass ${PWD}/dist/public/css/styles.css

prod_build: sass
		docker build \
			-t $(image_name):$(image_tag) \
			--build-arg square_app_id=${SQUARE_APP_ID} \
			--build-arg node_env=production .

dev_build: sass
		docker build \
			-t $(image_name):$(image_tag) \
			--build-arg square_app_id=${SQUARE_APP_ID} \
			--build-arg node_env=development .

publish: dev_build
		docker tag $(image_name):$(image_tag) $(dockerhub)/$(image_name):$(image_tag)
		docker push $(dockerhub)/$(image_name):$(image_tag)
