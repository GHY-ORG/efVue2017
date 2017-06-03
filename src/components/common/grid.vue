<template>
  <table id="grid">
    <thead>
      <tr>
        <th v-for="entry in columns" @click="sortBy(entry.a)">
          {{entry.name}}
          <span class="arrow" :class="[sortOrders[entry.a] > 0 ? 'asc':'dsc',sortKey === entry.a ? 'show':'']"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="
                    entry in filteredData
                    | orderBy sortKey sortOrders[sortKey]" @click="sendMsg(entry)">
        <td v-for="key in entry">{{key}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import bus from '../../store/index'

export default {
  data: function() {
    var sortOrders = {}
    this.columns.forEach(function(key) {
      sortOrders[key.a] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  props: ['data', 'columns'],
  computed: {
    filteredData: function() {
      var sortKey = this.sortKey

      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (sortKey) {
        data = data.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    sendMsg: function(entry) {
      // this.$parent.showMsg = entry
      // this.$parent.showMsg = entry
      bus.$emit('userDefinedEvent', entry)
    }
  }
}
</script>
