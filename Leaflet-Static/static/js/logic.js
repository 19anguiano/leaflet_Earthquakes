// Store our API endpoint
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson";

// Creating map object
let myMap = L.map("map", {
    center: [37.6, -95.665],
    zoom: 4
  });

// Adding the background map image tile layer to  map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// Radius color
d3.json(url).then(function(data) {
    function mapStyle(feature) {
      return {
        opacity: .75,
        fillOpacity: .75,
        fillColor: mapColor(feature.geometry.coordinates[2]),
        color: "#000000",
        radius: mapRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
      };
    }

// Establish colors dependent on depth
    function mapColor(depth) {
        switch (true) {
            case depth > 90:
                return "purple";
            case depth > 70:
                return "blue";
            case depth > 50:
                return "red";
            case depth > 30:
                return "orange";
            case depth > 10:
                return "yellow";
            default:
                return "lightblue";
        }
    }

  // Calculate radius from magnitude
  function mapRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }

    return magnitude * 4;
  }

  // Create geoJSON layer
    L.geoJson(data, {
    
      pointToLayer: function(_feature, latlng) {
        return L.circleMarker(latlng);
      },
      // Circle style
      style: mapStyle,

      // Create popup for each marker
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2]);
      }
    }).addTo(myMap);

// Create position for legend
    let legend = L.control({
        position: "bottomright"
        });
        
        // Create the specs for legend
        legend.onAdd = function() {
        let div = L.DomUtil.create("div", "info legend");
        
        let depth = [-10, 10, 30, 50, 70, 90];

        for (let i = 0; i < depth.length; i++) {
            div.innerHTML +=
            '<i style="background:' + mapColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
        }
        return div;
    };
        
    // Add legend to map
        legend.addTo(myMap);
    });

