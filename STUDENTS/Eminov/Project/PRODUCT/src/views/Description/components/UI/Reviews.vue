<template>
  <div class="row description_row mb-5">
    <div class="col">
      <hr>
      <div class="description_title_container">
        <div class="description_title">
          Reviews <span>({{ reviews.length }})</span>
        </div>
      </div>

      <ReviewsItem 
        v-for="review of reviews"
        :key="review.id"
        :review="review"
      />
    </div>
  </div>
</template>

<script>
import ReviewsItem from '../items/ReviewsItem.vue';

export default {
  name: "Reviews",
  components: { ReviewsItem },
  props: {
    reviews: {
      type: Array,
      default: () => [],
    },
  },
};
</script>