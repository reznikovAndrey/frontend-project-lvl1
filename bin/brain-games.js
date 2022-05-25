#!/usr/bin/env node

import { greeting, getUserName, greetUser } from '../src/cli.js';

greeting();
greetUser(getUserName());
