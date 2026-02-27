<template>
    <div class="blade">
        <h2>{{ sword.name }}</h2>
      <h3>{{ sword.part }}</h3>
      <h3>{{ sword.description }}</h3>
<!--       <img class="BladeImg" :src="sword.BladeImg" alt="bladeIMG isnt working"/> -->
        
</div>
<slot></slot>
</template>



<script setup>
defineProps({
    sword:{
        type: Object,
        required:true
    }
})
let WhalenRebellion = document.querySelectorAll(".blade")
   
</script>


<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 300px;
    width: 200px;
}</style><!-- ths could use some updateing -->