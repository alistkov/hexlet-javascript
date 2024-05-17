install: install-deps

install-deps:
	npm ci

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .
