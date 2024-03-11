1) the cross-env package needs for a workaround, because the ts-node package has a bug with esm type modules and crashes during initialization. It needs to wait for fix it.

https://github.com/TypeStrong/ts-node/issues/1997#issuecomment-1915868832
https://github.com/webpack/webpack-cli/issues/2458#issuecomment-1915865909

2) we should name a babel.config.cjs file with 'cjs' and not 'js' extension because of esm bug.

https://stackoverflow.com/questions/61146112/error-while-loading-config-you-appear-to-be-using-a-native-ecmascript-module-c

3) json-server has a bug on the last version (v1.0.0-alpha.23) so we use 0.17.4 version instead
https://github.com/typicode/json-server/issues/1500