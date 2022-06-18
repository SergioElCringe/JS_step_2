<template>
  <div class="map">
    <div id="google_map" class="google_map">
      <div class="map_container">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  methods: {
    initGoogleMap() {
      const myLatlng = new google.maps.LatLng(34.043238, -118.258338);
      const mapOptions = {
        center: myLatlng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggable: true,
        scrollwheel: false,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        styles: [
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#e9e5dc",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                weight: 1.5,
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [
              {
                weight: 1,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#fa9e25",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#e49307",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                weight: 0.5,
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#d9d4ca",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ],
      };

      // Initialize a map with options
      const map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // Re-center map after window resize
      google.maps.event.addDomListener(window, "resize", function () {
        setTimeout(function () {
          google.maps.event.trigger(map, "resize");
          map.setCenter(myLatlng);
        }, 1400);
      });
    },
  },
  mounted() {
    this.initGoogleMap();
  }
};
</script>

<style>
.google_map {
  width: 100%;
  height: 577px;
}
.map_container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#map {
  width: 100%;
  height: calc(100% + 30px);
}
@media only screen and (max-width: 575px) {
  .google_map {
    height: 350px;
  }
}
</style>