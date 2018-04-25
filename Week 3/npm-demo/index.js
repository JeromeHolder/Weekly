const _ = require('lodash');

const fishMatches = [
    'wanda',
    'joyce',
    'carl',
    'nemo',
    'woody',
    'ned',
    'nemo',
    'nemo',
    'wanda',
    'carl'
];

console.log(_.uniq(fishMatches));