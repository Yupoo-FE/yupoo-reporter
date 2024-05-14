import fetch from 'node-fetch'

type ReportRequestParams = {
    url: string;
    reportObj: any;
    debug?: boolean | string; // boolean 或者 自定义log前缀
};

async function reportRequest (url: ReportRequestParams['url'], reportObj: ReportRequestParams['reportObj'], debug: ReportRequestParams['debug'] = false)  {
    if (typeof window === 'object') {
        if (window?.navigator?.sendBeacon) {
            return window.navigator.sendBeacon(url, JSON.stringify(reportObj));
        }
    }
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(reportObj)
    }).then((res) => {
        if (debug) {
           if (typeof debug === 'boolean') {
            console.log('debug:', res);
           } else {
            console.log(debug, res);
           }
        } 
    }).catch(err => {
      console.log('[report error]', err);
    });
}

export default reportRequest;