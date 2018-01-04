<template>
  <div class="search">
    <div class="head"><i class="el-icon-error"></i></div>
    <div class="ipt">
      <mt-field class="input" placeholder="输入城市名或地标" type="text" v-model="username"></mt-field>
    </div>
    <div class="select">
    </div>
  </div>
</template>

<style lang="scss">
  .search {
    .ipt {
      .input {
        border: none;
      }
    }
  }
</style>
