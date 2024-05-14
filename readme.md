# 使用指南
```js
  const reportObj = {
    report_source: 'website',
    report_type: type,
    report_subject: subject,
    report_version: version
  };
  const url = isProd ? 'https://x.yupoo.com' : 'http://x.yupoo-dev.cn' + '/r/c/a?name=yupoo_internal';
  reportRequest(url, reportObj)
```



# 依赖注意事项

"node-fetch": "^2.6.6", 尽可能向下兼容

# 封版相关

master 分支为最新代码，为了不更新导致其他项目的崩溃，分出几个分支。如 1.1.x stable / impress-website(项目名) 单独去维护，有的项目不需要同步到最新的repoter sdk。

# 好处
1. 不用在项目中加一大堆兼容的代码, 在sdk中就提供了最向下兼容的产物。
```
require('es6-promise').polyfill();
require('fetch-ie8'); // 引入到 vendors.js
const reqwest = require('reqwest');
```
2. 使用 tsup 打包兼容 esm / cjs 的sdk，不用在一套代码里封装两遍耦合度极高的utils。
3. 后续图管所有上报都可以直接用这个通用的版本，降低切换项目上报的心智负担。