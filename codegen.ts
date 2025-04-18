import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "./schema.graphql",
    documents: "src/**/*.graphql",
    generates: {
        "src/gql/types.ts": {
            plugins: [],
        },
    },
};

export default config;
