import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "./schema.graphql",
    documents: "src/**/*.graphql",
    generates: {
        "src/gql/types.ts": {
            plugins: ["typescript"],
        },
        "src/": {
            preset: "near-operation-file",
            presetConfig: {
                extension: ".generated.ts",
                baseTypesPath: "./gql/types.ts",
            },
            plugins: ["typescript-operations", "typescript-react-apollo"],
            config: { withHooks: true },
        },
    },
};

export default config;
