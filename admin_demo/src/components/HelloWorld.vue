<template>
  <div class="hello">
    <h1></h1>
  </div>
</template>

<script>
import { watch } from "vue";
export default {
  name: "HelloWorld",
  props: {
    name: String
  },
  setup(props, context) {
    console.log(context, "上下文");
    watch(
      () => props.name,
      (newName, oldName) => {
        console.log(newName, oldName);
        context.emit("name-changed");
      }
    );

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
