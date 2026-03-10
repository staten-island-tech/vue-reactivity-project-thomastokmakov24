<template>
<div class="page">

  <!-- l -->
  <div class="swordPreview">

    <img v-if="selected.Blade" :src="selected.Blade.BladeImg" class="swordPart blade"/>
    <img v-if="selected.CrossGuard" :src="selected.CrossGuard.BladeImg" class="swordPart cross"/>
    <img v-if="selected.Grip" :src="selected.Grip.BladeImg" class="swordPart grip"/>
    <img v-if="selected.Pommel" :src="selected.Pommel.BladeImg" class="swordPart pommel"/>

  </div>


  <!-- r -->
  <div class="cardPanel">

    <SwordCard
      v-for="sword in swords"
      :key="sword.name"
      :sword="sword"
    >
      <button class="addBtn" @click="addToSword(sword)">
        Click Me
      </button>

    </SwordCard>

  </div>

</div>

    <!--<div>
        <SwordCard v-for="sword in swords" :key="sword.name" :sword="sword">
            <button @click="addToSword(sword)">Click Me</button>
        </SwordCard>
    </div> -->
</template>

<script setup>
import { ref } from 'vue'
/* import { swords } from 'vue' */
/* import { B } from 'vue-router/dist/index-Cu9B0wDz.mjs'; */
import SwordCard from '@/components/SwordCard.vue'
import { store } from '@/stores/store.js'/* empty list named store and a string like  */
/* swords.array.forEach(element => {
    element.classList.add(unselected = false);
}); */
const swords = ref([
    {
        name: "Spiked",
        part: "Pommel",
        BladeImg: "/Spiked.png",//make simple pixel arts bu t wait a bit until you are 100% shore u wanna do it or so that i dont gotta turn back and change the format to be invisisble or a jpeg or some. 
        description: "Made for those situations when theres so many enemies in the shower that you cant swing your sword in any direction but you still gotta defeat in every blow. ",
    },        {
        name: "Pumpkin",
        part: "Pommel",
        BladeImg: "/Pumpkin.png",
        description: "A heavy pommel, great for easy rotations of the blade but bad at lunges or pommel strikes. ",
    },        {
        name: "None",
        part: "Pommel",
        BladeImg: "/None.png",
        description: "Grip then nothing. I once had a sword like this but it flew out of my hands and welp, i got a free skull crossguard :D!",
    },        {
        name: "Basic",
        part: "Pommel",
        BladeImg: "/Basic.png",
        description: "I forgot which pommel was basic in my mind so imma make this up as i go.",
    },        {
        name: "Chained",
        part: "Pommel",
        BladeImg: "/Chained.png",// grip starts here
        description: "Sound Ninja Hashira's pommel. His wives look at them funny ",
    },    {
        name: "Leather Wrapped",
        part: "Grip",
        BladeImg: "/LeatherWrapped.png",
        description: "This one is good luck ;)",
    },    {
        name: "Textured",
        part: "Grip",
        BladeImg: "/Textured.png",
        description: "That one land shark guy's from naruto",
    },    {
        name: "Leather Wrapped",
        part: "Grip",
        BladeImg: "/Bloody.png",
        description: "Pretty cool but the owner's hands always ALWAYS bleed on it. Bad Luck",
    },    {
        name: "Diamond Cut",
        part: "Grip",
        BladeImg: "/Steel.png",
        description: "Common af",
    },    {
        name: "Winged",
        part: "CrossGuard",
        BladeImg: "/Winged.png",
        description: "Design choice tbh",
    },    {
        name: "Crab-Eyed",
        part: "CrossGuard",
        BladeImg: "/Crab.png",
        description: "Similar to horned but with less detail.",
    },    {
        name: "Horned",
        part: "CrossGuard",
        BladeImg: "/Horned.png",
        description: "Too many variations of this one.",
    },    {
        name: "Yapping Skull",
        part: "CrossGuard",
        BladeImg: "/yap.png",
        description: "Capt.'s Skelly, otherwise the one training dummy that Achiles stole",
    },    {
        name: "Skull",
        part: "CrossGuard",
        BladeImg: "/skull.png",
        description: "Some dude's head got skewered by sword and his 5 year old aunt's birthday party. Now he lives on as a crossguard. ",
    },    {
        name: "Ichigo's first",
        part: "Blade",
        BladeImg: "/Ichigo.png",
        description: "Actually, it is that one sound ninja hashira's blade.",
    },       {
        name: "Zenitsu's",
        part: "Blade",
        BladeImg: "/spark.png",
        description: "Taser Taser Taser",
    },       {
        name: "Inosuke's",
        part: "Blade",
        BladeImg: "/jag.png",
        description: "Beaten by my owner whom i was given to by my father. It changed who I am.",
    },       {
        name: "Black",
        part: "Blade",
        BladeImg: "/black.png",
        description: "Why are you even looking at this? It's just a black blade. ",
    },       {
        name: "Mihawk's butter knife",
        part: "Blade",
        BladeImg: "/mihawk.png",
        description: "It's about how you use it, not the size of it. ",
    },       {
        name: "Zagreus's Original",
        part: "Blade",
        BladeImg: "/stygian.png",
        description: "Only used in the tutorial; never touched again.",
    },       {
        name: "Zagreus's Excalibur",
        part: "Blade",
        BladeImg: "/zaG.png",
        description: "Upgrade the worst sword in the game to max level to unlock this. Whole concept is 'who will die first but I have a defensive aura.'",
    },       {
        name: "Link's Gaurdian Sword",
        part: "Blade",
        BladeImg: "/link.png",
        description: "Based off of the gaurdian spear. Not in the game;producer's choice.",
    },   
])
/* selector defnitions
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4"); */

/* 
let checkForDupes = function(sword){
    if (sword.part === "Pommel") {
        if (div1.children.length > 0) {
            div1.removeChild(div1.children[0]);
        }
    } else if (sword.part === "Grip") {
        if (div2.children.length > 0) {
            div2.removeChild(div2.children[0]);
        }
    } else if (sword.part === "CrossGuard") {
        if (div3.children.length > 0) {
            div3.removeChild(div3.children[0]);
        }
    } else if (sword.part === "Blade") {
        if (div4.children.length > 0) {
            div4.removeChild(div4.children[0]);
        }
    }
} */
const selected = ref({
  Pommel: null,
  Grip: null,
  CrossGuard: null,
  Blade: null
})
function addToSword(sword) {
  selected.value[sword.part] = sword
}
/* let addToSword = function(sword){
    sword.unselected = true;
    if (sword.part === "Pommel") {
        div1.innerHTML += `<div>${sword.name}, ${sword.BladeImg}</div>`;
    } else if (sword.part === "Grip") {
        div2.innerHTML += `<div>${sword.name}, ${sword.BladeImg}</div>`;
    } else if (sword.part === "CrossGuard") {
        div3.innerHTML += `<div>${sword.name}, ${sword.BladeImg}</div>`;
    } else if (sword.part === "Blade") {
        div4.innerHTML += `<div>${sword.name}, ${sword.BladeImg}</div>`;
    }
} */

/*     if (blank.classList.contains("selected")) {
        checkForDupes(blank);    
        divSelected.appendChild(blank);

} */ /* else {
    blank.classList.add("selected");
    divSelected.appendChild(blank);
} CHECK THIS SHIET
 */
</script>

<style scoped>
.page{
  display:flex;
  height:100vh;
}

/* to make the left side of ts */
.swordPreview{
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:-30px;
}


.cardPanel{
  flex:2;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:16px;
  padding:20px;
  overflow-y:auto;
}

.swordPart{
  width:120px;
}

/* .blade{

}

.cross{

}

.grip{

} */

.pommel{
  transform: rotate(180deg);/* adjust this if i want, its just there cuz there is some space btw them and it can move one to be on top the other.  */
}
</style>