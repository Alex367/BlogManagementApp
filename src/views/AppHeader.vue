<template>
  <nav class="ui menu huge inverted nav_items">
    <router-link to="/" class="item">Home</router-link>
    <div class="right menu">
      <router-link to="/createPost" class="item">Create Post</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.nav_items{
  margin-bottom: 0;
}
</style>
