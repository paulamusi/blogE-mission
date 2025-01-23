<script setup lang="ts">
import type { Post } from '~/types/Post'; 

const { locale } = useI18n();

const config = useRuntimeConfig();
const route = useRoute();
const apiBase = config.public.apiBase;

const { data: post, error, refresh } = await useAsyncData<Post>(`posts_p${route.params.id}`, () =>
  $fetch(`${apiBase}/posts/${route.params.id}`)
);

</script>

<template>
  <article v-if="post" class="flex flex-col space-y-8 mb-10 px-2 lg:px-0">
    <img :src="post.img" alt="image" class="w-full h-[200px] object-cover">
    <div class="flex">
      <p class="text-xl border-b-4 border-tealCustom">{{ post.author }}</p>
   </div>
   <div class="w-8/12 hover:w-10/12 transition-all duration-300 ease-in-out">
      <h1 class="my-2 text-3xl bg-blueCustom text-white">{{ post.title[locale] }}</h1>
   </div>
   <p class="md:w-[80%]">{{ post.description[locale] }}</p> 
   <time class="text-sm">{{ post.created_at[locale] }}</time>
  </article>
  <p v-else>Loading...</p>
</template>