<template>
    <Editor v-model="this.value" editorStyle="height: 320px" />
    <button @click="logData()">submit</button>
</template>

<script>
import Editor from 'primevue/editor';

export default {
  components: {
    Editor
  },
  data() {
    return {
      value:null,
    };
  },
  methods: {
    logData(){
      console.log(this.value);
    }
  },
  mounted() {

  }
};
</script>