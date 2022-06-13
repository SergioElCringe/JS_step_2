<template>
  <div class="row map_row">
    <div class="col">
      <!-- Google Map -->
      <div class="map">
        <div id="google_map" class="google_map">
          <div class="map_container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47276.012121860804!2d53.181470086277365!3d56.84891990247308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e13920148e2bb1%3A0xa7e1eb248097e152!2z0JjQttC10LLRgdC6LCDRgNC10YHQv9GD0LHQu9C40LrQsCDQo9C00LzRg9GA0YLQuNGP!5e0!3m2!1sru!2sru!4v1653512981305!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "MapGoogle"
};
</script>

<style>
</style>