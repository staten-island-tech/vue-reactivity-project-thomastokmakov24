<template>
    <divSelected class="divSelected"> gg
        <div1>g</div1>
        <div2>g</div2>
        <div3>gangster</div3>
        <div4>holybum bum</div4>
    </divSelected>


    <div>
        <div>
            <ul>
            <li v-for=" sword in swords" :key="sword.name" :sword="sword">{{ sword.part }}: {{sword.name}} . . . </li>
            </ul>        </div>
    </div>
    <div>
        <SwordCard v-for="sword in swords" :key="sword.name" :sword="sword">
            <button @click="addToSword(sword)">Click Me</button>
        </SwordCard>
    </div>
</template>

<script setup>
import { ref } from 'vue'
/* import { swords } from 'vue' */
/* import { B } from 'vue-router/dist/index-Cu9B0wDz.mjs'; */
import SwordCard from '@/components/SwordCard.vue'
import { store } from '@/stores/store.js'/* empty list named store and a string like  */

const swords = ref([
    {
        name: "Spiked",
        part: "Pommel",
        BladeImg: "",//make simple pixel arts bu t wait a bit until you are 100% shore u wanna do it or so that i dont gotta turn back and change the format to be invisisble or a jpeg or some. 
        description: "Made for those situations when theres so many enemies in the shower that you cant swing your sword in any direction but you still gotta defeat in every blow. ",
    },        {
        name: "Pumpkin",
        part: "Pommel",
        BladeImg: "",
        description: "A heavy pommel, great for easy rotations of the blade but bad at lunges or pommel strikes. ",
    },        {
        name: "None",
        part: "Pommel",
        BladeImg: "",
        description: "Grip then nothing. I once had a sword like this but it flew out of my hands and welp, i got a free skull crossguard :D!",
    },        {
        name: "Basic",
        part: "Pommel",
        BladeImg: "",
        description: "I forgot which pommel was basic in my mind so imma make this up as i go.",
    },        {
        name: "Chained",
        part: "Pommel",
        BladeImg: "",// grip starts here
        description: "Sound Ninja Hashira's pommel. His wives look at them funny ",
    },    {
        name: "Leather Wrapped",
        part: "Grip",
        BladeImg: "",
        description: "This one is good luck ;)",
    },    {
        name: "Textured",
        part: "Grip",
        BladeImg: "",
        description: "That one land shark guy's from naruto",
    },    {
        name: "Leather Wrapped",
        part: "Grip",
        BladeImg: "",
        description: "Pretty cool but the owner's hands always ALWAYS bleed on it. Bad Luck",
    },    {
        name: "Diamond Cut",
        part: "Grip",
        BladeImg: "",
        description: "Common af",
    },    {
        name: "Winged",
        part: "CrossGuard",
        BladeImg: "",
        description: "Design choice tbh",
    },    {
        name: "Crab-Eyed",
        part: "CrossGuard",
        BladeImg: "",
        description: "Similar to horned but with less detail.",
    },    {
        name: "Horned",
        part: "CrossGuard",
        BladeImg: "",
        description: "Too many variations of this one.",
    },    {
        name: "Yapping Skull",
        part: "CrossGuard",
        BladeImg: "",
        description: "Capt.'s Skelly, otherwise the one training dummy that Achiles stole",
    },    {
        name: "Skull",
        part: "CrossGuard",
        BladeImg: "",
        description: "Some dude's head got skewered by sword and his 5 year old aunt's birthday party. Now he lives on as a crossguard. ",
    },    {
        name: "Ichigo's first",
        part: "Blade",
        BladeImg: "",
        description: "Actually, it is that one sound ninja hashira's blade.",
    },       {
        name: "Zenitsu's",
        part: "Blade",
        BladeImg: "",
        description: "Taser Taser Taser",
    },       {
        name: "Inosuke's",
        part: "Blade",
        BladeImg: "",
        description: "Beaten by my owner whom i was given to by my father. It changed who I am.",
    },       {
        name: "Black",
        part: "Blade",
        BladeImg: "",
        description: "Why are you even looking at this? It's just a black blade. ",
    },       {
        name: "Mihawk's butter knife",
        part: "Blade",
        BladeImg: "",
        description: "It's about how you use it, not the size of it. ",
    },       {
        name: "Zagreus's Original",
        part: "Blade",
        BladeImg: "",
        description: "Only used in the tutorial; never touched again.",
    },       {
        name: "Zagreus's Excalibur",
        part: "Blade",
        BladeImg: "",
        description: "Upgrade the worst sword in the game to max level to unlock this. Whole concept is 'who will die first but I have a defensive aura.'",
    },       {
        name: "Link's Gaurdian Sword",
        part: "Blade",
        BladeImg: "",
        description: "Based off of the gaurdian spear. Not in the game;producer's choice.",
    },   
])

let checkForDupes = function(blank){
    if (blank.sword.part === "Pommel") {
        if (div1.children.length > 0) {
            div1.removeChild(div1.children[0]);
        }
    } else if (blank.sword.part === "Grip") {
        if (div2.children.length > 0) {
            div2.removeChild(div2.children[0]);
        }
    } else if (blank.sword.part === "CrossGuard") {
        if (div3.children.length > 0) {
            div3.removeChild(div3.children[0]);
        }
    } else if (blank.sword.part === "Blade") {
        if (div4.children.length > 0) {
            div4.removeChild(div4.children[0]);
        }
    }
}

let addToSword = function(sword){

    let blank = sword.target.closest(SwordCard);

    blank.classList.add("selected");
    if (blank.classList.contains("selected")) {
        checkForDupes(blank);    
        divSelected.appendChild(blank);

}
}

</script>

<style lang="scss" scoped>

</style>