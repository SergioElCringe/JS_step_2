<template>
  <div class="description_text">
    <figure>
        <div class="reviews_img"></div>
        <div class="reviews_info__about">
            <span>{{ review.name }}</span>
        </div>
    </figure>
    <figcaption>
        <div class="reviews_info">
        <span><b>Evaluation:</b> {{ review.evaluation }}</span>
        <span><b>Positive:</b> {{ review.positive }}</span>
        <span><b>Negative:</b> {{ review.negative }}</span>
        <span class="text-justify"><b>Comment:</b> {{ review.comment }}</span>
        </div>
    </figcaption>
  </div>
</template>

<script>
export default {
    name: 'ReviewsItem',
    props: {
        review: {
            type: Object,
            default: () => {},
        },
    },
};
</script>

<style scoped>
    .description_text {
        display: flex;
        box-shadow: 0 0 1px gray;
        padding: 10px;
        color: #1b1b1b
    }

    .description_text figure {
        text-align: center;
        margin: 0 auto;
        margin-right: 50px;
    }

    .reviews_img {
        width: 100px;
        height: 100px;
        background-color: lightgray;
        border-radius: 50%;
        margin: 0 auto;
    }

    .reviews_info__about span {
        display: block;
    }

    .reviews_info__about {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        width: 120px;
    }

    .reviews_info span {
        display: block;
        margin-bottom: 5px;
    }
</style>