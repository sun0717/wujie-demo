"use strict";
window.onload = () => {
    class WuJie extends HTMLElement {
        constructor() {
            super();
            // shadowdom 样式隔离 不会影响外层样式
            let dom = this.attachShadow({ mode: 'open' });
            let template = document.querySelector('#wujie');
            // template中的内容渲染到wujie组件中
            dom.appendChild(template.content.cloneNode(true));
            console.log(this.getAttr('url'), this.getAttr('age'));
        }
        getAttr(attr) {
            return this.getAttribute(attr);
        }
        // 生命周期自动触发
        connectedCallback() {
            console.log('vue 的 mounted');
        }
        // 生命周期卸载
        disconnectedCallback() {
            console.log('vue 的 destroy');
        }
        // watch
        attributeChangedCallback(name, oldVal, newVal) {
            console.log('vue 的 watch');
        }
    }
    // 原生js写的组件
    window.customElements.define('wu-jie', WuJie); // 挂载完成
};
