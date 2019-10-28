<template>
<div class="wrap">
    <v-header></v-header>
    <v-swiper></v-swiper>
    <v-item></v-item>
</div>
</template>
<script>
import vHeader from '../components/header'
import vSwiper from '../components/swiper'
import vItem from '../components/newsItem'
export default {
    components:{
        vHeader,
        vSwiper,
        vItem
    }
}
</script>

<style scoped lang="scss">
.wrap{
    background-color: #f3f3f3;
   
}
</style>