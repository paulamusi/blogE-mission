<script setup lang="ts">
const images = [
  "/images/business.jpg",
  "/images/homeImage.webp"
];

</script>

<template>
    <div class="flex flex-col md:flex-row">
        <Card :image="images[0]" />
        <Card :image="images[1]" class="[&_img]:brightness-80"/>
    </div>
  </template>

  