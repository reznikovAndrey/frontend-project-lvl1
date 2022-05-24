install: # install dependencies
	npm ci

brain-games: # start app
	node bin/brain-games.js

brain-even: # start game 'even / odd'
	node bin/brain-even.js

brain-calc: # start game 'calucate'
	node bin/brain-calc.js

brain-gcd: # start game 'Greatest common divisor'
	node bin/brain-gcd.js

brain-progression: # start game 'Progression'
	node bin/brain-progression.js

publish: # publish package (mock)
	npm publish --dry-run

lint: # check linting rules
	npx eslint .