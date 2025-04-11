<script lang="ts" setup></script>

<template>
  <div class="flex items-center gap-8 bg-gray-300 h-16 px-8 border-b-4 border-black">
    <Icon name="iconoir:multi-mac-os-window" class="text-5xl" />
    <nav class="flex h-full items-center">
      <ul class="flex h-full items-center font-bold text-3xl">
        <li class="flex h-full items-center px-4 hover:bg-black hover:text-white">
          <NuxtLink to="#home">Home</NuxtLink>
        </li>
        <li class="flex h-full items-center px-4 hover:bg-black hover:text-white">
          <NuxtLink to="#about">About</NuxtLink>
        </li>
        <li class="flex h-full items-center px-4 hover:bg-black hover:text-white">
          <NuxtLink to="#contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style></style>
