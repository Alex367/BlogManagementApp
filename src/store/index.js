import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        title: "Best Dessert Ever",
        image: "https://images.unsplash.com/photo-1567941723610-db0bcb4cca67?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 2,
        title: "Top 10 goals",
        image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 3,
        title: "Thriller films",
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
  },
  // return value
  getters: {
    getAllData(state) {
      return state.posts;
    },
  },
  // just functions
  mutations: {
    editCard(state, payload) {
      state.posts = state.posts.map((item) =>
        item.id === payload.id
          ? {
              ...item,
              title: payload.title,
              image: payload.image,
              description: payload.description,
            }
          : item
      );
    },
    deleteCard(state, payload) {
      state.posts = state.posts.filter((item) => item.id !== payload);
    },
    createCard(state, payload) {
      state.posts.push(payload);
    },
  },
  // deliver functionality into mutations
  actions: {
    editCard(context, payload) {
      context.commit("editCard", payload);
    },
    deleteCard(context, payload) {
      context.commit("deleteCard", payload);
    },
    createCard(context, payload) {
      context.commit("createCard", payload);
    },
  },
  // split into modules and merge into one store
  modules: {},
});
