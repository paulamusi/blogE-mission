<script setup lang="ts">

</script>
<template>
        <div class="h-0.5 bg-blueCustom"></div>
    <div class="text-gray-800 py-8">
      <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
        <div>
          <h4 class="text-lg mb-4">{{ $t('quick_links') }}</h4>
          <ul>
            <li><a href="/" class=" hover:text-tealCustom">{{ $t('home') }}</a></li>
            <li class=" hover:text-tealCustom"><NuxtLink to="/blog">{{ $t('blog') }}</NuxtLink></li>
            <li class=" hover:text-tealCustom"><NuxtLink to="/about">{{ $t('about') }}</NuxtLink></li>
          </ul>
        </div>
  
        <div>
          <h4 class="text-lg mb-4">{{ $t('categories') }}</h4>
          <ul>
            <li><a href="#" class=" hover:text-tealCustom">{{ $t('technology') }}</a></li>
            <li><a href="#" class=" hover:text-tealCustom">{{ $t('design') }}</a></li>
            <li><a href="#" class=" hover:text-tealCustom">{{ $t('lifestyle') }}</a></li>
            <li><a href="#" class=" hover:text-tealCustom">{{ $t('marketing') }}</a></li>
          </ul>
        </div>
  
        <div>
          <h4 class=" text-lg mb-4">{{ $t('follow_us') }}</h4>
          <ul>
            <li><a href="#" class=" hover:text-tealCustom">Facebook <i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#" class=" hover:text-tealCustom">Instagram <i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#" class=" hover:text-tealCustom">LinkedIn <i class="fa-brands fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </template>