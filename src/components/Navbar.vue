<template>
  <nav class="shadow-xl">
    <button data-cy="home" :class="[route.path !== '/' ? 'visible' : 'invisible']" @click="router.push('/')">
      <Home class="place-self-center" />
    </button>
    <div class="logo-title">
      <img data-cy="logo" src="@/assets/logo.gif" @click="router.push('/')" />
      <span class="title">Vue-Boards</span>
    </div>
    <Login />
  </nav>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import Home from '@/assets/icons/homeicon.svg';
import Login from '@/components/LoginButton.vue';

const router = useRouter();
const route = useRoute();
</script>

<style lang="postcss" scoped>
nav {
  @apply h-10 bg-blue7 grid grid-cols-3 z-10 fixed top-0 w-full;
}
button {
  @apply bg-white bg-opacity-30 hover:bg-opacity-20 self-center text-white rounded-sm ml-3 w-8 h-8 cursor-pointer grid;
}
.logo-title {
  @apply flex items-center justify-center;
}
img {
  @apply h-10 opacity-60 hover:opacity-100 cursor-pointer;
}
.title {
  @apply text-white ml-2 text-lg;
}
</style>
