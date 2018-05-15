Draft ReadTime
=========

Get read time from a Draft.js content state, based on Medium algorithm.

- Counts the number of words and divide it by 275.
- Adds 12s for the first image, 11s for the second, etc... until reaching 3 seconds, then add 3 seconds for all remaining images.
- More info: https://blog.medium.com/read-time-and-you-bc2048ab620c

## Installation

  `npm install draft-read-time`

## Usage

Simply import Draft ReadTime:

```javascript
// ES5
var readTime require('draft-read-time');

// ES6
import readTime from 'draft-read-time';   
```

Get read time by passing a Draft.JS content state to readTime function:

```javascript
var time = readTime(contentState); // Returns time in minutes
```

## Contributing

Pull requests are welcomed!
