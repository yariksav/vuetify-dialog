<template>
  <div v-html="text" />
</template>

<script>

export default {
  layout: 'snackbar',
  props: {
    text: String
  }
}
</script>
