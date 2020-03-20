<template>
  <div>
    {{test()}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      getCount: 'no',
      tableData: {
        name: ''
      },
      tableData2: {
        name: '1',
        id: 2
      }
    }
  },
  methods: {
    test () {
      this.tableData = this.tableData2
      console.log(this.tableData)
    }
  }
}

</script>
