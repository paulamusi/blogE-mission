<script setup lang="ts">
   const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  });

  const { locale } = useI18n();
</script>

<template>
   <article
     class="card flex flex-col md:flex-row  my-4 gap-10"
     :class="{ 'md:flex-row-reverse': post.id % 2 === 0 }"
   >
     <div class="flex-shrink-0 my-8 mx-auto">
       <img :src="post.img" alt="image" class="w-[500px] object-cover" />
     </div>
 
     <div class="flex flex-col justify-center gap-8">
      <div class="flex border-2 border-tealCustom">
         <div class="flex flex-col p-1.5">
            <span class="text-sm">{{ $t('created_by') }}: {{ post.author }}</span>
            <time>{{ post.created_at[locale] }}</time>
         </div>
         <h3 class="text-2xl text-tealCustom hover:text-white hover:bg-tealCustom p-1.5 border-l-2 border-tealCustom w-full text-left px-4">
            <NuxtLink :to="`/blog/${post.id}`">{{ post.title[locale] }}</NuxtLink>
         </h3>
      </div>
      <div>
       <p>{{ post.description[locale].substring(0, 100) }}...</p>
       <NuxtLink :to="`/blog/${post.id}`"><p class="py-4 uppercase text-sm">{{ $t('read_more') }} <i class="fa-solid fa-arrow-right bg-blueCustom text-white"></i></p></NuxtLink>
     </div></div>
   </article>
 </template>