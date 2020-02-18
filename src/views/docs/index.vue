<template>
	<div class="api-list">
		<h1>API一览</h1>
		<el-row :gutter="20">
			<el-col :span="6">
		  	<div class="grid-content bg-purple">
		  		<router-link to="/docs/api/1">
		  			<div class="api-list-li">
		  				<div class="api-info">
			  				<i class="el-icon-user"></i>
			  				<h2 class="api-name">用户</h2>
		  				</div>
		  			</div>
		  		</router-link>
		  	</div>
		  </el-col>
		  <el-col :span="6">
		  	<div class="grid-content bg-purple">
		  		<router-link to="/docs/api/2">
		  			<div class="api-list-li">
		  				<div class="api-info">
			  				<i class="el-icon-edit"></i>
			  				<h2 class="api-name">文章</h2>
		  				</div>
		  			</div>
		  		</router-link>
		  	</div>
		  </el-col>
		</el-row>
	</div>
</template>

<style>
	.api-list-li {
		float: left;
    width: 200px;
    height: 250px;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: 0 15px 15px 0;
	}
	.api-list-li i {
		font-size: 90px;
		color: rgb(121, 187, 255);
	}
	.api-info {
    padding-top: 50px;
    transition: .5s;
    text-align: center;
	}
	.api-name {
		color: #666;
    font-size: 14px;
    text-align: center;
    margin: 0;
    margin-bottom: 8px;
    padding: 0 20px;
	}
</style>