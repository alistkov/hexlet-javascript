install: deps-install

deps-install:
	npm ci

deps-update:
	npx npm-check-updates -u

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx oxlint && npx oxfmt --check

lint-fix:
	npx oxfmt && npx oxlint --fix

.PHONY: test