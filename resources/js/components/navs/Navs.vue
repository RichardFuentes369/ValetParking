<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link class="nav-link" :to="{ name: 'login'}">Valet Parking</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style lang="css" scoped>
</style>
