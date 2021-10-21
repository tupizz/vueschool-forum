<template>
  <h1>Welcome to the forum</h1>

  <thread-list :threads="threads" />
</template>

<script>
import sourceData from "@/data.json";
import ThreadList from "@/components/ThreadList";

export default {
  components: {
    ThreadList,
  },
  data() {
    return {
      threads: sourceData.threads,
    };
  },
};
</script>
