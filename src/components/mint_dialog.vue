<template>
  <el-dialog
    :visible.sync="dialogVisible"
    title="提示"
    width="500px">
    <el-form
      ref="form"
      :model="form"
      label-width="70px">
      <el-form-item label="广告标语">
        <el-input v-model="form.adslogan"/>
      </el-form-item>
      <el-form-item label="图片地址">
        <el-input v-model="form.adimg"/>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="mintFunc">确定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        adslogan: '',
        adimg: '',
      },
    };
  },
  methods: {
    mintFunc() {
      if (!this.form.adslogan && !this.form.adimg) return this.$message.warning('请完善内容');
      return this.$message('buy');
    },
  },
};
</script>
