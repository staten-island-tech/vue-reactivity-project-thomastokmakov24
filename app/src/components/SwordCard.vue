<template>
    <div class="blade">
        <h2>{{ sword.name }}</h2>
      <h3>{{ sword.part }}</h3>
      <p>{{ sword.description }}</p>
      <img class="BladeImg" :src="sword.BladeImg" alt="bladeIMG isnt working"/>
        <slot></slot>
</div>

</template>



<script setup>
defineProps({
    sword:{
        type: Object,
        required:true
    }
})

   
</script>


<style scoped>
/* div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 300px;
    width: 200px;
}*/
.blade{
  font-size:12px;
  border:1px solid black;
  padding:10px;
  width:160px;
  display:flex;
  flex-direction:column;
  gap:6px;

}
.BladeImg{
  width:100%;
  height:120px;
  object-fit:contain;
}
.addBtn{
  margin-top:6px;
  padding:4px;
  cursor:pointer;
}</style> 