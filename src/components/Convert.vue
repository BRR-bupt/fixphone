<script setup lang="ts">
import { read, utils, writeFileXLSX } from 'xlsx'
import { fixPhone } from '~/composables/convert'

let res: any[] = []

/* get state data and export to XLSX */
function exportFile() {
  const ws = utils.json_to_sheet(res)
  const wb = utils.book_new()
  utils.book_append_sheet(wb, ws, 'Data')
  writeFileXLSX(wb, 'Emran.xlsx')
}

async function loadFile(e: any) {
  const file = e.target.files[0]
  const data = await file.arrayBuffer()
  /* data is an ArrayBuffer */
  const wb = read(data)
  data.value = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
  console.log(data.value)

  res = fixPhone(data.value)
  console.log(res)
}
</script>

<template>
  <div class="convert">
    <input type="file" accept=".xlsx" @change="loadFile">
    <button @click="exportFile">
      导出文件
    </button>
    <div class="info">
      tips: 文件后缀为xlsx
    </div>
  </div>
</template>

<style scoped>
.convert {
  text-align: center;
  margin-top: 100px;
}
.info {
  margin-top: 100px;
}
</style>
