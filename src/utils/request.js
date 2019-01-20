function request(url, method = "GET"){
    return new Promise((resolve, rejects) => {
        wx.request({
            url:url,
            method:method,
            success:(res => {
                resolve(res)
            })
        })
    })
}

//  处理GET请求
request.get = (url, data) => {
    return request(url, "GET", data)
}

export default request;