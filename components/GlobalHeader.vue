<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale, locales, setLocale } = useI18n();
const route = useRoute()

const changeLanguage = (event: Event) => {
  const lang = (event.target as HTMLSelectElement).value as "en" | "es";
  locale.value = lang;
  localStorage.setItem('locale', lang); 
};

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="flex flex-row justify-between items-center my-8 px-4 relative">
    <div>
      <NuxtLink to="/"><img src="~/assets/images/logo.svg" class="h-10" alt="logo"></NuxtLink>
    </div>
  <div>
    <select id="lang" @change="changeLanguage($event)"> // Todo dropdown component
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  </div>
    <div class="lg:hidden cursor-pointer" @click="toggleMenu">
      <div class="w-6 h-0.5 bg-blueCustom mb-1.5"></div>
      <div class="w-6 h-0.5 bg-blueCustom mb-1.5"></div>
      <div class="w-6 h-0.5 bg-blueCustom"></div>
    </div>

    <nav 
      :class="[
        'lg:flex flex-col lg:flex-row', 
        isMenuOpen ? 'absolute top-0 right-0 w-full bg-tealCustom text-white transform translate-x-0 z-40 text-center' : 'hidden', 
        'transition-transform duration-300 ease-in-out'
      ]"
    >
      <ul class="flex flex-col lg:flex-row gap-3 list-none p-4 text-blueCustom">
        <li><NuxtLink  :style="{border: route.path === '/' ? '2px solid #434A75' : 'none'}"  to="/" @click="closeMenu" class="text-white lg:text-blueCustom lg:hover:text-white lg:hover:bg-tealCustom p-2 rounded">{{ $t('home') }}</NuxtLink></li>
        <li><NuxtLink :style="{border: route.path === '/blog' ? '2px solid #434A75' : 'none'}" to="/blog" @click="closeMenu" class="text-white lg:text-blueCustom lg:hover:text-white lg:hover:bg-tealCustom p-2 rounded">{{ $t('blog') }}</NuxtLink></li>
        <li><NuxtLink :style="{border: route.path === '/about' ? '2px solid #434A75' : 'none'}" to="/about" @click="closeMenu" class="text-white lg:text-blueCustom lg:hover:text-white lg:hover:bg-tealCustom p-2 rounded">{{ $t('about') }}</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>