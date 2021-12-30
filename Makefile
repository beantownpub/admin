.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= beantown_admin
version ?= $(shell jq .version package.json | tr -d '"')
hash = $(shell git rev-parse --short HEAD)

ifeq ($(env),dev)
	image_tag = $(version)-$(hash)
	environment = development
else ifeq ($(env),prod)
	image_tag = $(version)
	environment = production
endif

sass:
	sass ${PWD}/src/sass/styles.sass ${PWD}/dist/public/css/styles.css

build: sass
	docker build \
		-t $(image_name):$(image_tag) \
		--build-arg square_app_id=${SQUARE_APP_ID} \
		--build-arg node_env=$(environment) .

publish: build
	docker tag $(image_name):$(image_tag) $(dockerhub)/$(image_name):$(image_tag)
	docker push $(dockerhub)/$(image_name):$(image_tag)
