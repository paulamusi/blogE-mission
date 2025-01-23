<script setup lang="ts">
import type { Post } from '~/types/Post'; 

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const { data: posts, error, refresh } = await useFetch<Post[]>(`${apiBase}/posts`, {
      query: {
        _sort: 'id',
        _order: 'desc',
        _limit: 10
      }
    });
</script>

<template>
    <div class="relative h-[40vh]">
      <div class="absolute inset-0 bg-gray-100 clip-top"></div>
      <div class="absolute inset-0 bg-tealCustom clip-middle"></div>
      <div class="absolute inset-0 bg-black clip-bottom"></div>
      <div class="relative flex items-center justify-center h-full">
        <div class="text-center w-7/12">
          <h1 class="text-blueCustom text-5xl md:text-7xl uppercase">{{ $t('welcome') }}</h1>
          <p class="text-gray-600 text-2xl py-8">{{ $t('insights_stories_news')}}</p>
        </div>
      </div>
    </div>
    <div class="px-2 lg:p-0 mt-10">
      <h1 class="text-3xl uppercase bg-blueCustom text-white font-light px-4 w-6/12 hover:w-4/5 transition-all duration-300 ease-in-out">{{ $t('latest_posts') }}</h1>
      <section  v-if="posts">
        <Post v-for="(post, index) in posts" :key="post.id" :post="post" :class="{'border-b-2': index !== posts.length - 1}" />
      </section>
      <div v-else>
        <p>Cargando los posts...</p>
      </div>
      <div v-if="error">
        <p>Error al cargar los posts: {{ error.message }}</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .clip-top {
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 75%);
  }
  
  .clip-middle {
    clip-path: polygon(0 75%, 0 90%, 100% 70%, 100% 100%, 0 100%);
  }
  
  .clip-bottom {
    clip-path: polygon(0 90%, 100% 100%, 100% 100%, 0 100%);
  }
  </style>