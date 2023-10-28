<template>
  <div>
    <h1>Home page</h1>
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <p>to go in protected page first</p>
      <button @click="setLocalStorage">
        Set local storage as authenticated
      </button>
      <button @click="removeLocalStorage">
        remove token from local storage
      </button>
    </div>
    <NuxtLink to="/protected">Go to protected page</NuxtLink>
  </div>
</template>
<script setup lang="ts">
const auth = true;

function setLocalStorage() {
  const value = JSON.stringify({ auth });
  localStorage.setItem("token", value);
}
function removeLocalStorage() {
  localStorage.removeItem("token");
}
</script>
