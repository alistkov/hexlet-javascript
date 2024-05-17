install: install-deps

install-deps:
	npm ci

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	npm run test

test-watch:
	npm run test-watch
