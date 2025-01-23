<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true
  }
});
</script>
<template>
    <div class="w-[90%] px-2 py-4 lg:p-8 mx-auto">
       
        <h2 class="text-xl  text-gray-800 border-2 border-tealCustom p-1.5 w-fit">{{$t('title')}} </h2>
        <p class="p-1.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magnam ullam, 
        voluptatem corrupti corporis assumenda eveniet iusto, reprehenderit culpa error quam nobis accusamus 
        dolorum, quod deserunt et alias perferendis facere.
        </p>
        <img :src="image" alt="image technology" class="mt-10 h-[300px] w-full object-cover">
    </div>
</template>