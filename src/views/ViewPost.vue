<template>
  <div class="container container_view_post">
    <div class="ui cards post_cards">
      <div class="ui centered card posts_card">
        <div class="image">
          <img
            :src="image"
            :alt="title"
            class="ui huge image rounded centered post_image"
          />
        </div>
        <div class="content">
          <div class="header">{{ title }}</div>
          <div class="description">{{ description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { mapGetters } from "vuex";

export default {
  name: "ViewPost",
  data() {
    return {
      title: "",
      description: "",
      image: "",
    };
  },
  computed: {
    ...mapGetters(["getAllData"]),
  },
  created() {
    const route = useRoute();
    const id = route.params.id;
    const res = this.getAllData.filter(
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
.post_image {
  max-width: 70rem;
  max-height: 70rem;
}
.container_view_post {
  margin-bottom: 4.8rem;
}
.post_cards {
  width: 70rem;
}
.posts_card {
  width: 100% !important;
  height: 100% !important;
}
</style>
