import Vue from 'vue'

export interface VuetifyDialog {
  confirm(config: Object): Promise<any>;
  notify: {
    error(text: string): Promise<any>;
    warning(text: string): Promise<any>;
    info(text: string): Promise<any>;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: VuetifyDialog
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $dialog?: any
  }
}
