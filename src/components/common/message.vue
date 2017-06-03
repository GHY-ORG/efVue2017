<template>
  <div id="message">
    <h3>板块</h3>
    <div id="btn-area">
      <button class="btn btn-new">新增</button>
      <button class="btn">保存</button>
      <h4 v-if="newMsg">新增信息</h4>
      <h4 v-else>修改信息</h4>
      <form id="form" class="row">
        <div class="form-group w6 row" v-for="entry in columns">
          <label class="w3">{{entry.name}}</label>
          <div class="w9">
            <input class="form-control" type="text" v-model="showMsg[entry.a]">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import bus from '../../store/index'

export default {
  data: function() {
    var msg = {}
    this.columns.forEach(function(key) {
      msg[key.a] = ''
    })
    return {
      newMsg: true,
      showMsg: msg
    }
  },
  props: ['data', 'columns'],
  mounted: function() {
    var self = this
    bus.$on('userDefinedEvent', function(entry) {
      self.newMsg = false
      for (var p in self.showMsg) {
        self.showMsg[p] = entry[p]
      }
    })
  }
}
</script>
