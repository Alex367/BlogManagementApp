<template>
  <div class="popup">
    <div class="popup_inner">
      <slot></slot>
      <form class="ui form edit_form" @submit.prevent="submitForm">
        <div class="field required">
          <label class="ui pointing below label">Title</label>
          <input type="text" v-model="titleDef" required />
        </div>
        <div class="field required">
          <label class="ui pointing below label">Description</label>
          <textarea
            rows="2"
            class="description"
            v-model="descriptionDef"
            required
          ></textarea>
        </div>
        <div class="field labeled required">
          <label class="ui pointing below label">Link for image:</label>
          <input
            type="text"
            placeholder="http://..."
            v-model="imageDef"
            required
          />
        </div>
        <div class="form_buttons">
          <button
            class="ui blue submit button btn_submit"
            type="submit"
            v-if="
              this.titleDef !== this.title ||
              this.descriptionDef !== this.description ||
              this.imageDef !== this.image
            "
          >
            Edit Post
          </button>
          <button class="ui red button btn_close" @click="closeItem">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupMenu",
  props: ["id", "title", "description", "image"],
  data() {
    let titleDef = this.title;
    let descriptionDef = this.description;
    let imageDef = this.image;
    return {
      titleDef,
      descriptionDef,
      imageDef,
    };
  },
  methods: {
    closeItem() {
      this.$emit("closeCard");
    },
    submitForm() {
      this.$store.dispatch("editCard", {
        id: this.id,
        title: this.titleDef,
        description: this.descriptionDef,
        image: this.imageDef,
      });
      this.closeItem();
    },
  },
};
</script>
<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup_inner {
  background: #fff;
  width: 50rem;
  height: 35rem;
  border-radius: 0.4rem;
  padding: 2.4rem;
}
.description {
  height: 10rem;
}
.edit_form {
  display: flex;
  flex-direction: column;
}
.form_buttons {
  text-align: right;
}
</style>
