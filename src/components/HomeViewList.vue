<template>
  <li class="post">
    <div class="ui large header">{{ post.title }}</div>
    <img
      :src="`${post.image}`"
      :alt="`${post.image}`"
      class="ui huge image centered post_image"
    />
    <div class="post_btn">
      <button class="ui blue button" @click="openItem">
        <span>Edit</span>
      </button>
      <router-link :to="`/viewPost/${this.id}`" class="post_view"
        >View</router-link
      >
      <button class="ui red button" @click="deleteItem">
        <span>Delete</span>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "HomeViewList",
  props: ["post", "id"],
  methods: {
    openItem() {
      this.$emit("toggleCard", this.id);
    },
    deleteItem() {
      this.$store.dispatch("deleteCard", this.id);
    },
  },
};
</script>

<style scoped>
.post {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 0.8rem;
  width: 60rem;
  height: 50rem;
}

.post_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
}
.post_image {
  max-height: 40rem;
}
.post_view {
  box-shadow: inset 0 0 0 0 #000;
  color: #000;
  margin: 0 -1.8rem;
  padding: 1.2rem 1.8rem;
  border-radius: 0.4rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.post_view:hover {
  box-shadow: inset 100px 0 0 0 #000;
  color: white;
}
</style>
