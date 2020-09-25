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
  handler? (action: any): Promise<any>
}

interface DialogActionable {
  actions?: object | Array<string|DialogAction> | Array<DialogAction>
  handle? (action: any): Promise<any>
  handler? (action: any): Promise<any>
}

export interface DialogObject<ReturnType = any> {
  show (): Promise<DialogObject> | DialogObject | undefined
  wait (): Promise<ReturnType>
  remove (): void
  close (): void
  showed: boolean
  element: Vue['$el']
  hasAsyncPreload: boolean
  vm: VueConstructor<Vue>
  vmd: Vue.Component
}

export interface DialogMessageOptions extends DialogActionable {
  color?: string
  position?: string
  timeout?: number
  type?: string
  outlined?: boolean
  prominent?: boolean
  dismissible?: boolean
  flat?: boolean
  centered?: boolean
  border?: string
  tile?: boolean
  dense?: boolean
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
  flat?: boolean
  icon?: string
  rounded?: boolean
  outlined?: boolean
  shaped?: boolean
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

interface DialogOptionsWait {
    waitForResult: true
    [P: string]: any
}
interface DialogOptionsNoWait {
    waitForResult?: false
    [P: string]: any
}

/** This is manager from vuedl/src/manager */
export interface VuetifyDialog {
  component (name: string, options: object | VueConstructor): void
  create<T = any>(component: object | VueConstructor): DialogObject<T>
  show<T = any>(component: object | VueConstructor, params?: DialogOptionsWait): Promise<T>
  show<T = any>(component: object | VueConstructor, params?: DialogOptionsNoWait): Promise<DialogObject<T>>
  showAndWait<T = any>(component: object | VueConstructor, props?: Record<string, any>): Promise<T>
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

  on(evt: string, callback: (...args: any[]) => any): void
  off(evt: string, callback: (...args: any[]) => any): void
  once(evt: string, callback: (...args: any[]) => any): void
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
