import Vue, { VueConstructor, PluginFunction } from 'vue'

export interface VuetifyDialogUseOptions {
  context?: object,
  property?: string
}

declare const VuetifyDialogPlugin: VuetifyDialogPlugin
export default VuetifyDialogPlugin

export interface VuetifyDialogPlugin {
  install: PluginFunction<VuetifyDialogUseOptions>
}

export interface DialogAction {
  text: string
  key: string
  component?: string
  flat? : boolean
  outlined? : boolean
  icon? : string
  color? : string
  rounded? : boolean
  disabled?: boolean
  handle? (action: any): Promise<any>
}

interface DialogActionable {
  actions?: object | Array<string|DialogAction> | Array<DialogAction>
  handle? (action: any): Promise<any>
}

export interface DialogObject {
  show (): DialogObject | undefined
  wait (): Promise<any>
  close (): void
  vm: object
  vmd: object
}

export interface DialogMessageOptions extends DialogActionable {
  color?: string
  position?: string
  timeout?: number
  type?: string
}

export interface DialogNotifyOptions extends DialogActionable {
  dismissible?: boolean
  position?: string
  showClose?: boolean
  timeout?: number
  type?: string
  verticalOffset?: number
  width?: number
  zIndex?: number
}

export interface DialogConfirmOptions extends DialogActionable {
  icon?: string | boolean
  persistent?: boolean
  showClose?: boolean
  scrollable?: Boolean
  text?: string
  title?: string
  type?: string
  waitForResult?: boolean
  width?: number
  value?: any
}

export interface VuetifyDialog {
  component (name: string, options: object | VueConstructor): void
  show (component: object | VueConstructor, options?: object): DialogObject
  // implemented dialogs
  confirm (options: DialogConfirmOptions): Promise<any>
  prompt (options: DialogConfirmOptions): Promise<any>
  warning (options: DialogConfirmOptions): Promise<any>
  error (options: DialogConfirmOptions): Promise<any>
  notify: {
    error (text: string, options?: DialogNotifyOptions): Promise<any>
    warning (text: string, options?: DialogNotifyOptions): Promise<any>
    info (text: string, options?: DialogNotifyOptions): Promise<any>
    success (text: string, options?: DialogNotifyOptions): Promise<any>
  }
  message: {
    error (text: string, options?: DialogMessageOptions): Promise<any>
    warning (text: string, options?: DialogMessageOptions): Promise<any>
    info (text: string, options?: DialogMessageOptions): Promise<any>
    success (text: string, options?: DialogMessageOptions): Promise<any>
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
