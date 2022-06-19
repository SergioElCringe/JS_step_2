<template>
    <div class="icon_box">
        <div class="icon_box_image">
            <img :src="img + item.imgUrl" alt="" />
        </div>
        <div class="icon_box_title">{{ item.text }}</div>
        <div class="icon_box_text">
            <p>
                Описание. Очень интересное, но совсем-совсем непонятное.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: { item: {}, img: {} },
    name: "IconItems",
};
</script>

<style>
</style> 