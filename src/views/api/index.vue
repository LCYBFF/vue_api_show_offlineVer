<template>
  <div>
    <div class="api-mains-content">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="api-img-des">
            <i :class="'el-icon-' + Datalist.icon"></i>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="api-infos">
            <div class="title">
              <h2>{{ Datalist.title }}</h2>
            </div>
            <div class="api-inc">
              <span v-html="Datalist.type_inc"></span>
              <p><span v-html="Datalist.inc"></span></p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="api-docs-wrapper">
      <el-tabs v-model="activeName">
        <el-tab-pane label="API文档" name="first">
          <div
            v-loading="DatalistLoading">
            <p>
              <strong>接口地址：</strong>
              <span>{{ Datalist.url }}</span>
            </p>
            <p>
              <strong>返回格式：</strong>
              <span>{{ Datalist.ext }}</span>
            </p>
            <p>
              <strong>请求方式：</strong>
              <span>{{ Datalist.type }}</span>
            </p>
            <p>
              <strong>请求示例：</strong>
              <span>{{ Datalist.eg }}</span>
            </p>
            <div class="paramTable">
              <p><strong>请求主体说明：</strong></p>
              <paramTable
                :list="Datalist.param">
              </paramTable>
            </div>
            <div class="paramTable">
              <p><strong>返回参数说明：</strong></p>
              <paramTable
                :list="Datalist.callback"
                :tableType="'eg'">
              </paramTable>
            </div>
            <div class="json-eg">
              <paramTable
                :list="Datalist.data_eg"
                :tableType="'eg'">
                <span v-if="Datalist.isParam">指定参数时data说明：</span>
                <span v-else>data说明：</span>
              </paramTable>
              <div v-if="Datalist.isParam">
                <paramTable
                  :list="Datalist.data_eg_child"
                  :tableType="'eg'">
                  不指定参数时data示例：
                </paramTable>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="错误码参照" name="second">
          <div
            v-loading="CodelistLoading">
            <paramTable
              :list="Codelist"
              :tableType="'error'">
            </paramTable>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
  
  import { getApiInfo, getErrorCode } from '@/api/api';
  import paramTable from '@/components/paramTable';
  import router from '@/router';

  export default {
    data() {
      return {
        activeName: 'first',
        Datalist: [],
        Codelist: [],
        DatalistLoading: true,
        CodelistLoading: true
      };
    },
    components: {
      paramTable
    },
    created() {
      this.getData()
      this.getErrorCode()
    },
    methods: {
      getData() {
        const id = this.$route.params.id
        getApiInfo(id).then(response => {
          this.Datalist = response.data
          this.DatalistLoading = false
        })
      },
      getErrorCode() {
        getErrorCode().then(response => {
          this.Codelist = response.data
          this.CodelistLoading = false
        })
      }
    }
  };
</script>

<style>
  .api-img-des {
    position: relative;
    left: 0;
    top: 0;
    width: 210px;
    height: 220px;
    padding: 25px;
    text-align: center;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(36,36,36,0.1);
  }
  .api-img-des i {
    padding-top: 50px;
    transition: .5s;
    font-size: 90px;
    color: rgb(121, 187, 255);
  }
</style>