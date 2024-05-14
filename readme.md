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