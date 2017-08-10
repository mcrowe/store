"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const channel_1 = require("@mcrowe/channel");
class Store {
    constructor(initialValue) {
        this.value = initialValue;
        this.channel = new channel_1.default();
    }
    get() {
        return this.value;
    }
    broadcast() {
        this.channel.publish(undefined);
    }
    subscribe(fn) {
        return this.channel.subscribe(fn);
    }
}
exports.default = Store;
