<template>
    <div>
        <div>
            <li v-for=" sword in swords" :key="sword.image,sword.name"></li>
        </div>
    </div>
</template>

<script setup>
import { swords } from 'vue'
import { B } from 'vue-router/dist/index-Cu9B0wDz.mjs';
const swords = [
    {
        name: "Spiked",
        part: "Pommel",
        BladeImg: "",
    },        {
        name: "Pumpkin",
        part: "Pommel",
        BladeImg: "",
    },        {
        name: "None",
        part: "Pommel",
        BladeImg: "",
    },        {
        name: "Basic",
        part: "Pommel",
        BladeImg: "",
    },        {
        name: "Chained",
        part: "Pommel",
        BladeImg: "",// grip starts here
    },    {
        name: "Leather Wrapped",
        part: "Grip",
        BladeImg: "",
    },    {
        name: "Textured",
        part: "Grip",
        BladeImg: "",
    },    {
        name: "Leather Wrapped",
        part: "Grip",
        BladeImg: "",
    },    {
        name: "Diamond Cut",
        part: "Grip",
        BladeImg: "",
    },    {
        name: "Winged",
        part: "CrossGuard",
        BladeImg: "",
    },    {
        name: "Crab-Eyed",
        part: "CrossGuard",
        BladeImg: "",
    },    {
        name: "Horned",
        part: "CrossGuard",
        BladeImg: "",
    },    {
        name: "Skull",
        part: "CrossGuard",
        BladeImg: "",
    },    {
        name: "Ichigo's first",
        part: "Blade",
        BladeImg: "",
    },       {
        name: "Zenitsu's",
        part: "Blade",
        BladeImg: "",
    },       {
        name: "Inosuke's",
        part: "Blade",
        BladeImg: "",
    },       {
        name: "Black",
        part: "Blade",
        BladeImg: "",
    },       {
        name: "Mihawk's butter knife",
        part: "Blade",
        BladeImg: "",
    },       {
        name: "Zagreus's Original",
        part: "Blade",
        BladeImg: "",
    },       {
        name: "",
        part: "Blade",
        BladeImg: "",
    },       {
        name: "",
        part: "Blade",
        BladeImg: "",
    },   
]


</script>

<style lang="scss" scoped>

</style>