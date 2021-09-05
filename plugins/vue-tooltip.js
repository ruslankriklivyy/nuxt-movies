import Vue from "vue";
import VTooltip from "v-tooltip";
import vueDebounce from "vue-debounce";

Vue.use(VTooltip).use(vueDebounce, {
  listenTo: "input"
});
