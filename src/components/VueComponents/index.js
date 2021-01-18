import Component1 from "./Component1.vue";
import Component2 from "./Component2.vue";

const VueComponent = {
    install(Vue){
        Vue.component("Component1",Component1)
        Vue.component("Component2",Component2)
    }
}
export default VueComponent;