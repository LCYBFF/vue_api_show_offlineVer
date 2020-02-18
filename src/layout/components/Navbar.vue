<template>
	  	<div class="nav">
		  	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
				  <el-menu-item index="1">
				  	<router-link to="/">首页</router-link>
				  </el-menu-item>
				  <el-menu-item index="2">
				  	<router-link to="/docs">API</router-link>
				  </el-menu-item>
				</el-menu>
		  </div>
</template>

<script>
	export default {
    computed: {
    	activeIndex() {
    		let path = this.$route.path.split('/')[1];
    		if (path == 'docs') {
    			return '2'
    		} else {
    			return '1'
    		}
    	}
    }
  }
</script>

<style>
	
</style>