install: deps-install

deps-install:
	npm ci

deps-update:
	npx npm-check-updates

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
