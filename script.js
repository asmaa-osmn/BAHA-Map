mapboxgl.accessToken = 'pk.eyJ1IjoiYXNtYWEtb3NtYW4iLCJhIjoiY21oYTBiNzB6MWxqMzJxcTZjYm82Z3pjdiJ9.ZJI6NwoVqJnfgNN4Ih3y2g';
const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/asmaa-osman/cmha0gzf8000h01sm898u6frs', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });