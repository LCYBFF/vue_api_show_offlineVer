<template>
  <div>
    <el-container>
      <el-row>
        <el-col
          :span="12"
          style="float: none;margin: 0 auto;"
          id="Body">
          <Navbar />
          <el-main id="mainBody">
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
  body > .el-container {
    margin-bottom: 40px;
  }
  a {
    text-decoration: none;
  }

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

  #mainBody {
    padding-top: 5rem;
  }
  
  @media screen and (max-width: 1440px) {
    #Body{
        width: 100%;
    }
  }
</style>