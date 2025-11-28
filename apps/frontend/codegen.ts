import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "src/graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-vue-apollo"],
      config: {
        withCompositionFunctions: true,
        vueCompositionApiImportFrom: "vue",
      },
    },
  },
};

export default config;
