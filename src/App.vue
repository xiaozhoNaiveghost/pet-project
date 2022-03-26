<template>
  <div id="app">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
</template>

<script>
import { Button, Table } from 'view-design';

export default {
  name:'app',
  components:{
    [Button.name]:Button,
    [Table.name]:Table
  }
}
</script>

<style lang="less">
button{
  background-color: #17233d;
}
</style>
