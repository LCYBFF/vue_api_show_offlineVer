<template>
  <div>
    <p><strong><slot></slot></strong></p>
    <el-table
      :data="list"
      border
      fit>
      <template v-for="item in headers">
        <el-table-column
          :prop="item.field"
          :label="item.label"
          :width="item.width"
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'paramTable',
    props: {
      list: {
        type: Array,
        default: () => []
      },
      tableType: {
        type: String,
        default: () => 'body'
      }
    },
    data() {
      return {
        headers: [],
        bodyHeader: [{
          'field': 'name',
          'label': '名称',
          'width': '150'
        },{
          'field': 'must',
          'label': '必填',
          'width': '50'
        },{
          'field': 'type',
          'label': '类型',
          'width': '100'
        },{
          'field': 'details',
          'label': '说明'
        }],
        egHeader: [{
          'field': 'name',
          'label': '名称',
          'width': '150'
        },{
          'field': 'type',
          'label': '类型',
          'width': '100'
        },{
          'field': 'details',
          'label': '说明'
        }],
        errorHeaders: [{
          'field': 'code',
          'label': '错误码',
          'width': '150'
        },{
          'field': 'details',
          'label': '说明'
        }]
      }
    },
    created() {
      this.setHeader()
    },
    methods: {
      setHeader() {
        switch(this.tableType) {
          case 'body': 
            this.headers = this.bodyHeader
            break
          case 'eg':
            this.headers = this.egHeader
            break
          case 'error':
            this.headers = this.errorHeaders
            break
        }
      }
    }
  }
</script>