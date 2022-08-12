<template>
    <div class="container mt-5">
    <div class="row row-reverse">
        
        <div v-for="(item,index) in img" :key="index" class="col-4">
        <img :src="item" alt="" srcset="">
        </div>
    </div>
 
    {{id}} {{title}} {{texte}}
    </div>
</template>
<script>

import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

import {  collection, getDocs } from "firebase/firestore";
import db from '../firebase.js'

export default {
    name:'galery',
    props: [''],
    data(){
        return {
            id:'',
            title:'',
            link:'',
            texte:'',
            img:[],
        
        }
    },

    

    mounted(){
                    this.img=[]
                    this.id = this.$route.params.id

                  
                    
                    getDocs(collection(db, "reportage")).then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
  
                                if (this.id == doc.data().id){
                                    console.log(doc.data())
                                    this.title = doc.data().title;
                                    this.link = doc.data().link
                                    this.texte = doc.data().texte

                                        const storage = getStorage();
                                        const storageRef = ref(storage, this.link);
                                        listAll(storageRef).then((res) => {

                                        res.items.forEach((itemRef) => {
                                             getDownloadURL(ref(storage, this.link+'/'+itemRef.name)).then((url) => {
                                                      
                                                        this.img.push(url) })}) ;
                                                 })
                                }
                             
      
                            });    
                        })
                    


                    

             },

    watch: {
            '$route' (){
                this.img=[]
                this.id = this.$route.params.id
              
            getDocs(collection(db, "reportage")).then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
  
                                if (this.id == doc.data().id){
                                    console.log(doc.data())
                                    this.title = doc.data().title;
                                    this.link = doc.data().link
                                    this.texte = doc.data().texte

                                        const storage = getStorage();
                                        const storageRef = ref(storage, this.link);
                                        listAll(storageRef).then((res) => {

                                        res.items.forEach((itemRef) => {
                                             getDownloadURL(ref(storage, this.link+'/'+itemRef.name)).then((url) => {
                                                       
                                                        this.img.push(url) })}) ;
                                                 })
                                }
                             
      
                            });    
                        })

            }
            },
        }
</script>
<style>
.galery {
    justify-content: center;
    align-items: center;
    display: flex;
}
img {
    max-height: 300px;
    margin: 10px;
}
</style>