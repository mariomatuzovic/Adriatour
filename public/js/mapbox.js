/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibGVpc3R1bmcxNiIsImEiOiJja2ZpOG50czAwOXNwMnNvZHg5enNqOWFkIn0.Q1wwaKMgoOWSLo1kEBQKbA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/leistung16/ckfi4izze1v1g19nu303blk2r',
    // scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 250,
      bottom: 200,
      left: 150,
      right: 150,
    },
  });
};
