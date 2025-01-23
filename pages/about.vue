<script setup lang="ts">
</script>

<template>
  <div class="relative min-h-screen">
    <div class="absolute inset-0 bg-gray-100 clip-top"></div>
    <div class="absolute inset-0 bg-black clip-bottom"></div>

    <div class="relative flex items-center justify-center min-h-screen px-4">
      <div class="text-center relative mt-8 md:-top-20">
        <h1 class="text-blueCustom text-3xl mb-6">{{$t('about')}}</h1>
        <div class="m-8">
          <p class="px-4 text-left text-sm md:text-base text-gray-800">
            Welcome to our corner of creativity and purpose! At this Company, we believe in doing things
            a little differently—mixing passion with innovation to craft something truly meaningful.
            What started as a small idea fueled by curiosity has grown into a place where ideas come to life,
            challenges are embraced, and stories are shared.
            We’re not just about what we do but also why we do it. Every step we take is rooted in a commitment to
            [your values, e.g., quality, sustainability, community]. Whether we’re [specific action, e.g., designing, building, innovating],
            our focus is always on delivering something that inspires and connects.
            Thank you for being part of our journey. Together, we’re creating more than
            just [product/service]—we’re building something that matters.
          </p>
        </div>
        <GlobalForm />
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-top {
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 70%);
}

.clip-bottom {
  clip-path: polygon(0 70%, 100% 60%, 100% 100%, 0 100%);
}
</style>