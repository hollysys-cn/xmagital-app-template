import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

// HTTP 连接到 GraphQL API
const httpLink = createHttpLink({
  // 使用相对路径，通过 Vite 代理转发到后端
  uri: "/graphql",
});

// 缓存实现
const cache = new InMemoryCache();

// 创建 Apollo Client 实例
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

// 提供给 Vue 应用的 setup 函数使用
export function setupApollo() {
  provideApolloClient(apolloClient);
}
