<template>
  <v-dialog v-model="showed" :max-width="width">
    <dialog-child v-bind="$options.propsData" ref="dialog"/>
  </v-dialog>
</template>

<script>
export default {
}
</script>
