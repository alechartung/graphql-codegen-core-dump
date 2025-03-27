# reproduce graphql-codegen core dump

1. run `npx graphql-codegen -se --config codegen.ts --watch`
2. ctrl+c to exit out
3. see double free + core dump error

tested on ubuntu 24.04

```console
$ npx graphql-codegen -se --config codegen.ts --watch
  ℹ Watching for changes in /home/alec/code/graphql-codegen-core-dump...
^Cfree(): double free detected in tcache 2
Aborted (core dumped)
```

