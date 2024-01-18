<template>
  <main class="container container_home">
    <div class="ui huge header">List Blog Posts</div>
    <template v-if="posts.length">
      <ul class="home_blogs">
        <HomeViewList
          v-for="post in posts"
          :post="post"
          :id="post.id"
          :key="post.id"
          @toggleCard="openCard"
        />
      </ul>
    </template>
    <template v-else>
      <p class="no_posts">No posts here yet... <i class="sync icon"></i></p>
    </template>
    <PopupMenu
      v-if="buttonTrigger"
      :id="openedCard[0].id"
      v-model:title="openedCard[0].title"
      v-model:description="openedCard[0].description"
      v-model:image="openedCard[0].image"
      @closeCard="closeCard"
    >
      <div class="ui huge header">Edit Post</div>
    </PopupMenu>
  </main>
</template>

<script>
import HomeViewList from "@/components/HomeViewList.vue";
import PopupMenu from "@/components/PopupMenu.vue";

export default {
  name: "HomeView",
  data() {
    return {
      buttonTrigger: false,
      openedCard: null,
    };
  },
  computed: {
    posts() {
      return this.$store.getters.getAllData;
    },
  },
  components: {
    HomeViewList,
    PopupMenu,
  },
  methods: {
    openCard(cardId) {
      this.buttonTrigger = !this.buttonTrigger;
      this.openedCard = this.posts.filter((item) => item.id === cardId);
    },
    closeCard() {
      this.buttonTrigger = !this.buttonTrigger;
      this.openedCard = null;
    },
  },
};
</script>

<style>
.container_home {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 4.8rem;
  margin-bottom: 4.8rem;
}
.home_blogs {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  width: 80%;
}
.no_posts{
  font-size: 1.6rem;
}
</style>
