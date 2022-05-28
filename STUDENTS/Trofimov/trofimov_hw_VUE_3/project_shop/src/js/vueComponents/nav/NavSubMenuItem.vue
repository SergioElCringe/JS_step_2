<template>
    <li>
        <a :href='item.text'>{{ item.link }}</a>
    </li>
</template>

<script>
    export default {
        name: 'NavSubMenuItem',
        props: ['item', 'ready'],
    };
</script>

<style>
</style> 