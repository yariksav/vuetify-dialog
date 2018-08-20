<template>
  <div>
    <v-toolbar v-if="!!type" dark :color="getColor" dense>
      <v-icon v-if="!!getIcon">{{ getIcon }}</v-icon>
      <v-toolbar-title class="white--text" v-text="title"/>
    </v-toolbar>
    <v-card tile>
      <v-card-title v-if="!type">
        <h3 class="headline mb-0" v-text="title" />
      </v-card-title>
      <v-card-text v-html="message"/>
      <v-card-actions>
        <v-spacer/>
        <v-btn v-for="(button) in parsedButtons" :key="button.key"
          :color="button.color || 'gray'"
          @click="click(button)"
          v-html="button.text"
          flat/>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  layout: 'default',
  props: {
    type: String,
    icon: String,
    color: String,
    title: String,
    message: {
      type: String,
      reqiured: true
    },
    buttons: {
      type: [Array, Object]
    }
  },
  computed: {
    getColor () {
      return this.color || this.type
    },
    getIcon () {
      return this.icon || this.type
    },
    parsedButtons () {
      const buttons = []
      for (let key in this.buttons) {
        let button = this.buttons[key]
        if (typeof button === 'string') {
          button = {text: button}
        }
        if (!button.key) {
          button.key = isNaN(key) ? key : button.text
        }
        if (['true', 'false'].indexOf(button.key) >= 0) {
          button.key = JSON.parse(button.key)
        }
        buttons.push(button)
      }
      return buttons
    }
  },
  methods: {
    click (button) {
      this.$emit('close', button.key)
    }
  }
}
</script>
