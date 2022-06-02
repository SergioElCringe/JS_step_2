<template>
  <div class="home bg-h">
    <div class="home_container">
      <div class="home_background bg-slider"></div>
      <div class="home_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content">
                <div class="breadcrumbs">
                  <ul>
                    <li>{{ title }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageBanner',
  props: {
    name: {
      type: String,
    },
  },

  computed: {
    title() {
      return this.name.toUpperCase();
    },
  },
};
</script>