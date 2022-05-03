<template>
    <li class="home_slider_custom_dot" :class="{ active: active }">{{ dotNum }}</li>
</template>

<script>
export default {
    name: 'SliderDot',
    props: ['num', 'active'],
    computed: {
        dotNum() {
            return '0' + this.num + '.'
        }
    }
}
</script>

<style>

</style>