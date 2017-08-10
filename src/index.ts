import Channel from '@mcrowe/channel'


export default class Store<T> {

  private value: T
  private channel: Channel<undefined>

  constructor(initialValue: T) {
    this.value = initialValue
    this.channel = new Channel<undefined>()
  }

  get(): T {
    return this.value
  }

  broadcast() {
    this.channel.publish(undefined)
  }

  subscribe(fn: () => void) {
    return this.channel.subscribe(fn)
  }

}