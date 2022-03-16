<template>
  <div>
    <p><NuxtLink to="/secret">Go to Secret Page</NuxtLink></p>
    <button class="button" @click="signOut" v-if="firebaseUser">Sign out</button>
    <div v-if="firebaseUser">
      <client-only>
        <pre
          >{{ firebaseUser }}
    </pre
        >
      </client-only>
    </div>
    <div v-else>User is signed out</div>
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();

const signOut = async () => {
  await signOutUser();
};

</script>

<style>
</style>
