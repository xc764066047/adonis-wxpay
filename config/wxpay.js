'use strict'
// 导入.env文件（才能调用里面的数据）
const Env = use('Env')

module.exports = {
  // 公众账号 ID
  appid: Env.get('WXPAY_APP_ID'),

  // 商户号
  mch_id: Env.get('WXPAY_MCH_ID'),

  // 密钥
  key: Env.get('WXPAY_KEY'),

  // 通知地址(回调地址)
  notify_url: Env.get('WXPAY_NOTIFY_URL'),

  // 接口地址
  api: {
    unifiedorder: 'https://api.mch.weixin.qq.com/pay/unifiedorder', // 下单api
    orderquery: 'https://api.mch.weixin.qq.com/pay/orderquery'    // 查询订单api
  }
}
