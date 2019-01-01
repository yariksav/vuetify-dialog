import Vue, { VueConstructor } from 'vue'

export interface DialogObject {
  show (): DialogObject | undefined
  wait (): Promise<any>
  close (): void
  vm: object
  vmd: object
}

export interface DialogMessageOptions {
  actions?: object
  waitForResult?: boolean
  persistent?: boolean
}
export interface DialogConfirmOptions {
  text?: string
  title?: string
  type?: string
  actions?: object | Array<string> | Array<DialogAction>
  waitForResult?: boolean
  icon?: string
  persistent?: boolean
}

export interface DialogAction {
  text: string
  key: string
  component?: string
  flat? : boolean
  outline? : boolean
  icon? : string
  color? : string
  round? : boolean
  disabled?: boolean
}

export interface VuetifyDialog {
  component (name: string, config: object | VueConstructor): void
  show (component: object | VueConstructor): DialogObject
  // implemented dialogs
  confirm (options: DialogConfirmOptions): Promise<any>
  prompt (options: DialogConfirmOptions): Promise<any>
  warning (options: DialogConfirmOptions): Promise<any>
  error (options: DialogConfirmOptions): Promise<any>
  notify: {
    error (text: string, options?: DialogMessageOptions): Promise<any>
    warning (text: string, options?: DialogMessageOptions): Promise<any>
    info (text: string, options?: DialogMessageOptions): Promise<any>
  }
  message: {
    error (text: string, options?: DialogMessageOptions): Promise<any>
    warning (text: string, options?: DialogMessageOptions): Promise<any>
    info (text: string, options?: DialogMessageOptions): Promise<any>
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: VuetifyDialog
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData? (context: object): Promise<any> 
    primaryKey?: string
  }
}
