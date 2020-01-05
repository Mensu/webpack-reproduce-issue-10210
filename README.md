# Steps to reproduce the bug

1. install dependencies

```sh
npm install
```

2. start dev server with `--hot`

```sh
npx webpack-dev-server --hot --config index.config.js
```

3. edit foo.js, for example change `foo = 42` to `foo = 43`

An error will be thrown before the dev server crashes

```
<cwd>/node_modules/webpack/lib/HotModuleReplacementPlugin.js:272
                                                                const removedModules = records.chunkModuleIds[chunkId].filter(
                                                                                                                       ^

TypeError: Cannot read property 'filter' of undefined
    at compilation.hooks.additionalChunkAssets.tap (<cwd>/node_modules/webpack/lib/HotModuleReplacementPlugin.js:272:64)
    at SyncHook.eval [as call] (eval at create (<cwd>/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)
    at SyncHook.lazyCompileHook (<cwd>/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.optimizeTree.callAsync.err (<cwd>/node_modules/webpack/lib/Compilation.js:1399:37)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (<cwd>/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (<cwd>/node_modules/tapable/lib/Hook.js:154:20)
    at Compilation.seal (<cwd>/node_modules/webpack/lib/Compilation.js:1342:27)
    at compilation.finish.err (<cwd>/node_modules/webpack/lib/Compiler.js:675:18)
    at hooks.finishModules.callAsync.err (<cwd>/node_modules/webpack/lib/Compilation.js:1261:4)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (<cwd>/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)
```
