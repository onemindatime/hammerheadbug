import { r as registerInstance, h } from './core-973ea74f.js';

const World = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { id: "hello" }, "Hello"));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { World as hello_world };
