<script lang="ts" setup></script>

<template>
  <div>
    <div class="parent h-[calc(100vh-4rem)] px-16 py-8">
      <Window title="My current stack" class="col-span-2 row-span-1">
        <div class="h-full flex justify-evenly items-center text-7xl">
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-html5" />
            <span class="text-lg">HTML</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-css3" />
            <span class="text-lg">CSS</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-javascript" />
            <span class="text-lg">Javascript</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-nuxt" />
            <span class="text-lg">Nuxt</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-vue" />
            <span class="text-lg">Vue</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-typescript" />
            <span class="text-lg">Typescript</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-tailwind" />
            <span class="text-lg">Tailwind</span>
          </div>
        </div>
      </Window>
      <Window title="Github" class="col-span-1 row-span-1 bg-blue-500"></Window>
      <Window title="?" class="col-span-1 row-span-2 bg-green-500"></Window>
      <Window title="My favourite song" class="col-span-1 row-span-1">
        <TopSong />
      </Window>
      <Window title="Something about me" class="col-span-2 row-span-2">
        <div class="half-parent h-full p-4">
          <Window title="I'm..." class="col-span-1 row-span-1">
            <span class="h-full flex items-center justify-center text-4xl font-bold text-center">Filippo <br />
              Crespi</span>
          </Window>
          <Window title="That's me!" class="col-span-1 row-span-2">
            <div class="h-full flex items-center justify-center">
              <img src="/imgs/portrait.jpg" alt="My avatar" class="h-full w-full contain-size object-cover grayscale" />
            </div>
          </Window>
          <Window title="What you need to know" class="col-span-1 row-span-1">
            <div class="h-full p-4 font-medium">
              I'm a computer science student, on my way to become a full-stack web developer.
            </div>
          </Window>
        </div>
      </Window>
      <Window title="?" class="col-span-1 row-span-2 bg-pink-500"></Window>
      <Window title="I'm currently learning" class="col-span-1 row-span-1">
        <div class="h-full flex justify-evenly items-center text-7xl">
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-docker" />
            <span class="text-xl">Docker</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="tabler:brand-nodejs" />
            <span class="text-xl">Node.js</span>
          </div>
        </div>
      </Window>
      <Window title="My socials" class="col-span-1 row-span-1">
        <div class="h-full flex justify-evenly items-center text-7xl">
          <NuxtLink to="https://github.com/Filippo-Crespi" target="_blank">
            <div class="flex flex-col items-center">
              <Icon name="tabler:brand-github" />
              <span class="text-xl">Github</span>
            </div>
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/your-profile" target="_blank">
            <div class="flex flex-col items-center">
              <Icon name="tabler:brand-linkedin" />
              <span class="text-xl">LinkedIn</span>
            </div>
          </NuxtLink>
        </div>
      </Window>
      <Window title="My recent projects" class="col-span-2 row-span-1 bg-gray-500"></Window>
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