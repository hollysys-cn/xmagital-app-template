import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import { setupApollo } from "./apollo";

const app = createApp(App);

// 配置 Element Plus
app.use(ElementPlus);

// 配置 Router
app.use(router);

// 配置 Apollo Client
setupApollo();

app.mount("#app");
