<template>
  <div class="message">
    <div class="head">消息</div>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from '../Nav/Nav'

  export default {
    components: {
      Nav
    }
  }
</script>

<style lang="scss">
  .message {
    .head {
      padding: 5px;
      border-bottom: 0.5px solid gray;
    }
  }
</style>
