<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "Window",
  },
});
</script>

<template>
  <div>
    <div class="border-2 border-black w-auto h-full">
      <div class="flex justify-between items-center border-b-2 border-b-black">
        <div class="p-2 flex justify-start items-center gap-2 flex-1">
          <Icon name="famicons:close-circle" class="text-2xl" />
          <Icon name="famicons:remove-circle" class="text-2xl" />
        </div>
        <span class="mx-auto my-0">{{ title }}</span>
        <span class="flex-1"></span>
      </div>
      <div class="p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<style></style>
