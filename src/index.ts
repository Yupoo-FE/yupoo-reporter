async function reportRequest (url: string, reportObj: any) {
    if (window?.navigator?.sendBeacon) {
        return window.navigator.sendBeacon(`${window.location.origin}/r/c/a?name=yupoo_internal`, JSON.stringify(reportObj));
    }
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(reportObj)
    }).then(() => {
    }).catch(err => {
      console.log('[report error]', err);
    });
}

export default reportRequest;