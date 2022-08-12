<template>
    
    <ul style="
    padding-left: 0 !important;"> <h5 @click="Leshow" class="headmenu"><a href="javascript:void(0)">Menu</a></h5>
    <transition name="appear">
        <div v-if="this.store.show" :class="{active: this.store.show,inactive: !this.store.show}">
        <router-link :to="{ name:'galery', params:{id: item.id,title: item.title, link: item.link }}" v-for="(item,index) in dropmenu" :key="index">
            <h6>
                <a href="">{{item.title}}</a>
            </h6>
        </router-link>
        </div>
    </transition>
    </ul>



</template>
<script>
import {tweak} from '../stores/counter'
export default {
    name:'dropdown',
    props:['dropmenu'],
    setup(){
        const store = tweak()

        return {
        store,
        }
    },
    data(){
        return {
            show:this.store.show,
        }
    },
    methods:{
        Leshow(){
            this.store.show=!this.store.show;


        }
    }
}
</script>
<style>
.headmenu {
    padding-left: 10px !important;
    padding: 10px;
    position: relative;
    
}
.headmenu:after {
    content: '';
    position: absolute;
    width: 0px;
    height: 2px;
    background-color: black;
    border: solid 0px;
    bottom: 0;
    left: 0%;
    
	left: 0;
    right: 0;
    transition: 1s;
}
.headmenu:hover:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 2px;
    bottom: 0;
    left: 0%;
    transition: 0.3s;
}

.active{
    max-height: 200px;
    overflow: scroll;
    overflow-y: scroll;
   
}
.inactive {
    max-height: 0px;
    overflow: hidden;
   
}
.appear-enter-from, .appear-leave-to {
    
    max-height: 0px;
    overflow: hidden;
    transition: all 0.5s ease;
}
.appear-enter-to, .appear-leave-from {
    max-height: 200px;
    overflow: scroll;
    transition: all 0.5s ease-out;
}
li {
    padding: 10px;
}
a {
   text-decoration: none !important;
   color: black !important;
}
</style>