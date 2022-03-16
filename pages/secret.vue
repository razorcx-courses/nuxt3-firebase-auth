<template>
  <div>
    <div>Secret</div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const firebaseUser = useFirebaseUser();
</script>

<style></style>
