# leaflet_Earthquakes

# Prompt
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

# Requirements
1. Get dataset from https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

2. Import and visualize the data by doing the following:
    - Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.Your data markers should reflect the magnitude of 
    the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth 
    should appear darker in color.
    - Include popups that provide additional information about the earthquake when its associated marker is clicked.
    - Create a legend that will provide context for your map data.

![map](https://user-images.githubusercontent.com/119361768/229378256-ec6b4228-ab44-4102-9c78-cb21cead1673.png)


# Resources
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson
https://leafletjs.com/reference.html
https://stackoverflow.com/questions/22325819/d3-js-get-json-from-url
https://stackoverflow.com/questions/69841596/how-to-return-multiple-layers-from-pointtolayer-leaflet-geojson
