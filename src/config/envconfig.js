// 全局配置

let baseUrl = ''
let imgUrl
if (process.env.NODE_ENV === 'development'){
  baseUrl = 'https://dev-back-quickbuild.dingdong.site/api'
  imgUrl = '//elm.cangdu.org/img/'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = '//elm.cangdu.org'
  imgUrl = '//elm.cangdu.org/img/'
}

export {
  baseUrl,
  imgUrl
}

