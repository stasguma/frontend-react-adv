the cross-env package needs for a workaround, because the ts-node package has a bug with esm type modules and crashes during initialization. It needs to wait for fix it.

https://github.com/TypeStrong/ts-node/issues/1997#issuecomment-1915868832
https://github.com/webpack/webpack-cli/issues/2458#issuecomment-1915865909