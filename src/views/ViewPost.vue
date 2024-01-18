<template>
  <div class="container container_view_post">
    <div class="post ui segment">
      <div class="ui huge header centered">{{ title }}</div>
      <img :src="image" :alt="title" class="ui huge image rounded centered post_image" />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "ViewPost",
  data() {
    return {
      title: "",
      description: "",
      image: "",
    };
  },
  created() {
    const route = useRoute();
    const id = route.params.id;
    const res = this.$store.getters.getAllData.filter(
      (item) => String(item.id) === String(id)
    );
    if (res.length === 0 || !res) {
      return this.$router.push("/");
    }
    this.title = res[0].title;
    this.description = res[0].description;
    this.image = res[0].image;
  },
};
</script>

<style>
.post_image{
  margin-bottom: 2.4rem;
}
</style>
