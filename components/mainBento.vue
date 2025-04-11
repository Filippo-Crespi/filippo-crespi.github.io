<script lang="ts" setup></script>

<template>
  <div>
    <div class="parent h-[calc(100vh-4rem)] px-16 py-8">
      <Window class="col-span-2 row-span-1 bg-red-500">stack</Window>
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
