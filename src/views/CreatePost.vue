<template>
  <div class="container createPost">
    <div class="ui huge header center aligned">Create New Post</div>
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
export default {
  name: "CreatePost",
  components: {FormComponent},
};
</script>

<style>
.createPost{
  width: 40%;
}
</style>
