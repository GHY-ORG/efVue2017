<template>
  <div id="content">
    <demo-message :data="gridData" :columns="gridColumns">
    </demo-message>
    <demo-grid :data="gridData" :columns="gridColumns">
    </demo-grid>
  </div>
</template>
<script>
import demoMessage from '../../components/common/message'
import demoGrid from '../../components/common/grid'

export default {
  name: 'board',
  data() {
    return {
      gridColumns: [{
        name: '版块编号',
        a: 'boardId'
      }, {
        name: '版块名',
        a: 'boardName'
      }, {
        name: '板块类型',
        a: 'boardType'
      }, {
        name: '图片地址',
        a: 'boardPic'
      }, {
        name: '是否审核',
        a: 'boardCheck'
      }, {
        name: '是否删除',
        a: 'status'
      }, {
        name: 'i am test',
        a: 'test'
      }],
      gridData: [{
        boardId: '2',
        boardName: '板块1',
        boardType: '文件',
        boardPic: 'd:/img/music',
        boardCheck: '未审核',
        status: '0',
        test: 'a'
      }, {
        boardId: '1',
        boardName: '板块3',
        boardType: '文件',
        boardPic: 'd:/img/lit',
        boardCheck: '已审核',
        status: '0',
        test: 'b'
      }, {
        boardId: '3',
        boardName: '模块2',
        boardType: '图片',
        boardPic: 'e',
        boardCheck: '未审核',
        status: '0',
        test: 'c'
      }],
      showMsg: {
        boardId: '',
        boardName: '',
        boardType: '',
        boardPic: '',
        boardCheck: '',
        status: '',
        test: ''
      }
    }
  },
  components: {
    demoMessage,
    demoGrid
  },
  methods: {
    sendMsg: function() {
      console.log('222222')
    }
  }
}
</script>
