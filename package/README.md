# Match Score Simulation

A quick function to return random football scores with realistic score probabilities.

## Installation

In your desired console run:

```code
npm i match-simulation-algorithm
```

## Usage

In your js file require the package by writing:

```js
const matchSim = require('match-simulation-algorithm');
```

Call the ```getScore()``` function like so (must be assigned to a variable):

```js
const result = matchSim.getScore();
```

## Output

returns an object with two variables: ```homeScore``` and ```awayScore```

Example output:
```json
{ homeScore: 3, awayScore: 2 }
```

These can be accessed like so:

```js
const homeScore = result.homeScore;
const awayScore = result.awayScore;
```





