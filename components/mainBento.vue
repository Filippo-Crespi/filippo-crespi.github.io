<script lang="ts" setup></script>

<template>
  <div>
    <div class="parent h-[calc(100vh-4rem)] px-16 py-8">
      <Window title="My current tech stack" class="col-span-2 row-span-1 bg-red-500">
        <div class="h-full flex justify-evenly items-center text-7xl">
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-html5" />
            <span class="text-xl">HTML</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-css3" />
            <span class="text-xl">CSS</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-javascript" />
            <span class="text-xl">Javascript</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-typescript" />
            <span class="text-xl">Typescript</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-vue" />
            <span class="text-xl">Vue</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-nuxt" />
            <span class="text-xl">Nuxt</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-tailwindcss" />
            <span class="text-xl">Tailwind</span>
          </div>
        </div>
      </Window>
      <Window class="col-span-1 row-span-1 bg-blue-500">github</Window>
      <Window class="col-span-1 row-span-2 bg-green-500">?</Window>
      <Window class="col-span-1 row-span-1 bg-yellow-500">song</Window>
      <Window class="col-span-2 row-span-2 bg-purple-500">
        <div class="half-parent h-full">
          <Window class="col-span-1 row-span-1 bg-cyan-500">img</Window>
          <Window class="col-span-1 row-span-1 bg-lime-500">?</Window>
          <Window class="col-span-2 row-span-1 bg-lime-500">intro text</Window>
        </div>
      </Window>
      <Window class="col-span-1 row-span-2 bg-pink-500">?</Window>
      <Window class="col-span-1 row-span-1 bg-orange-500">cur learn</Window>
      <Window class="col-span-1 row-span-1 bg-teal-500">socials</Window>
      <Window class="col-span-2 row-span-1 bg-gray-500">projects</Window>
    </div>
  </div>
</template>

<style>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
}
.half-parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
}
</style>
