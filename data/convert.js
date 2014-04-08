// convert.js, Alex Shopov, Code for Boston, April 7, 2014
// reduce the enormous data in StreetTrees.json to a more useable form
// current output is a JSON object containing id, species, and location
// reduced file size is 2.3 mb vs the 21 mb complete dataset

var fs = require('fs')

var data = JSON.parse(fs.readFileSync('StreetTrees.geojson'));
var trees = [];

for(var feature in data.features) {
	var out = {};
	
	out.id = trees.length;
	out.species = data.features[feature].properties.species;
	out.geometry = data.features[feature].geometry;
	
	trees.push(out);
};

fs.writeFileSync('trees-reduced.json', JSON.stringify({ "trees": trees }));