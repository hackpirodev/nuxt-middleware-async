<template>
  <div>
    <h1>Protected page</h1>
    <NuxtLink to="/">Go to home page</NuxtLink>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>
