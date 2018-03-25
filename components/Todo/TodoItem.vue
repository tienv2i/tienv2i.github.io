<template>
  <b-card border-variant="primary" no-body>
    <b-card-body>
      {{todo.text}}
    </b-card-body>
    <b-button variant="danger" @click="remove" class="top-right">x</b-button>
  </b-card>
</template>
<script>
export default {
  props: ['todo'],
  methods: {
    remove () {
      this.$emit('remove')
    }
  }
}
methods: {}
</script>
<style>
.top-right{
  position: absolute;
  top: -1px;
  right: -1px;
  font-size: 13px
}
</style>
