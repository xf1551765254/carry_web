<template>
  <div class="el-main-content">
    <div id="pdfDom">
      测试pfd
    </div>
    <el-button type="primary" @click="downloadPdf">主要按钮</el-button>
  </div>
</template>

<script>
import generateResume from '@/utils/pdf.js'
export default {
  name: 'partner',
  data() {
    return {
      htmlTitle: '',
    }
  },
  methods: {
    downloadPdf() {
      generateResume(
        document.getElementById('pdfDom'),
        '测试'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
#pdfDom {
  line-height: 20px;
  font-size: 20px;
  color: #1f2d3d;
  text-align: center;
  margin-top: 10px;
}
</style>