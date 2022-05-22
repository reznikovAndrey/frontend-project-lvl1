install: # install dependencies
	npm ci

brain-games: # start app
	node bin/brain-games.js

publish: # publish package (mock)
	npm publish --dry-run

lint: # check linting rules
	npx eslint .