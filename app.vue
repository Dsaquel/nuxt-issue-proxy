<script setup lang="ts">
// switch false and true to catch the issue
const { data } = await useFetch('/backend/users', { server: true })
</script>

<template>
  {{ data }}
</template>
