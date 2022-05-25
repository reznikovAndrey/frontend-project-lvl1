install: # install dependencies
	npm ci

brain-games: # start app
	node bin/brain-games.js

brain-even: # start game 'Is even?'
	node bin/brain-even.js

brain-calc: # start game 'Calculate'
	node bin/brain-calc.js

brain-gcd: # start game 'Greatest common divisor'
	node bin/brain-gcd.js

brain-progression: # start game 'Progression'
	node bin/brain-progression.js

brain-prime: # start game 'Is prime?'
	node bin/brain-prime.js

publish: # publish package (mock)
	npm publish --dry-run

lint: # check linting rules
	npx eslint .