const host = 'http://rap2api.taobao.org/app/mock/2730'

// 开发环节，所有接口走rap数据
function rap (urlList) {
  let obj = {}
  Object.keys(urlList).forEach(key => {
    obj[key] = host + urlList[key]
  })
  return obj
}

export {
  host,
  rap
}
