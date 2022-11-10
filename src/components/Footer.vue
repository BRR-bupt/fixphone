<script setup lang="ts">
import { toggleDark } from '~/composables/index'
</script>

<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <button icon-btn @click="toggleDark()">
      <div>is me</div>
    </button>
  </nav>
</template>
