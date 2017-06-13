Calculates optimal number of columns, given an 'ideal'

Usage:

```javascript
const howManyColumns = require('how-many-columns');

// Params and default values
const result = howManyColumns({
	containerWidth: window.innerWidth, // container width, required
	idealContainerWidth: 320 // Used with idealColumns
	idealColumns: 2, // Ideally, layout 2 columns when container width is 320 (iPhone 4s)
	left: 15, // Left padding
	right: 15, // Right padding 
	interItem: 15, // Spaces between items
	roundDown: true // Stratety to resolve decimal amount of columns
});

console.log(result.columnWidth); // Width of each card
console.log(result.columns); // Total number of columns
```