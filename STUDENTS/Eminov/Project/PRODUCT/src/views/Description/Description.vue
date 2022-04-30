<template>
  <div>
    <HomePageBanner :name="`description product ${itemName}`" />
    <div class="product_details">
      <div class="container">

        <DescriptionProduct /> 

        <div class="row description_row">
          <div class="col">
            <div class="description_title_container">
              <div class="description_title">Description</div>
              <div class="reviews_title">
                <a href="#">Reviews <span>(1)</span></a>
              </div>
            </div>
            <div class="description_text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo
                tempus mollis sed et dui. In hac habitasse platea dictumst.
                Suspendisse ultrices mauris diam. Nullam sed aliquet elit.
                Mauris consequat nisi ut mauris efficitur lacinia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HomePageBanner from "../../components/pages/UI/HomePageBanner.vue";
import DescriptionProduct from "../../components/DescriptionProduct.vue";

export default {
  name: "Description",
  components: { HomePageBanner, DescriptionProduct },

  computed: {
    ...mapState({
      itemName: state => state.DescriptionProduct.product.name,
    }),
  },
};
</script>