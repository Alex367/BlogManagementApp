<template>
  <form class="ui form" @submit.prevent="submitForm">
    <div class="field required">
      <label class="ui pointing below label">Title</label>
      <input type="text" v-model="newTitle" required />
    </div>
    <div class="field required">
      <label class="ui pointing below label">Description</label>
      <textarea rows="2" v-model="newDescription" required></textarea>
    </div>
    <div class="field labeled input required">
      <label class="ui pointing below label">Link for image:</label>
      <input type="text" placeholder="http://..." v-model="newImage" required />
    </div>
    <div>
      <button class="ui submit button blue">Create Post</button>
    </div>
  </form>
  <div v-if="sendFormStatus" class="ui message blue">
    <div class="header">New post successfully created <i class="thumbs up icon"></i></div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "FormComponent",
  data() {
    return {
      newTitle: "",
      newDescription: "",
      newImage: "",
      sendFormStatus: null,
    };
  },
  methods: {
    submitForm() {
      this.$store.dispatch("createCard", {
        id: uuidv4(),
        title: this.newTitle,
        image: this.newImage,
        description: this.newDescription,
      });
      this.sendFormStatus = true;
      const time = setTimeout(() => (this.sendFormStatus = false), 2000);
      return () => clearTimeout(time);
    },
  },
};
</script>