<template>
  <div>
    <el-container>
      <el-row>
        <el-col :span="12" style="float: none;margin: 0 auto;">
          <Navbar />
          <el-main>
            <app-main />
          </el-main>
        </el-col>
      </el-row>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import { Navbar, Footer, AppMain} from './components'

  export default {
    name: 'Layout',
    components: {
      Navbar,
      Footer,
      AppMain
    }
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    color: #333;
    overflow: hidden;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  a {
    text-decoration: none;
  }
</style>