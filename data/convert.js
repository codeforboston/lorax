// convert.js, Alex Shopov, Code for Boston, April 7, 2014
// reduce the enormous data in StreetTrees.geojson to a more useable form
// current output is a GEOJSON object containing id, species, and location
// reduced file size is 3 mb vs the 21 mb complete dataset

var fs = require('fs')

var data = JSON.parse(fs.readFileSync('StreetTrees.geojson'));
var trees = {
	"type": "FeatureCollection",
	"features": []
};

for(var feature in data.features) {
	var out = {
		"type": "Feature",
		"id": 0,
		"properties": {}
	};
	
	out.id = trees.features.length;
	out.properties.species = data.features[feature].properties.species;
	out.geometry = data.features[feature].geometry;
	
	trees.features.push(out);
};

fs.writeFileSync('trees-reduced.geojson', JSON.stringify(trees, null, 2));
fs.writeFileSync('trees-reduced.min.geojson', JSON.stringify(trees));
