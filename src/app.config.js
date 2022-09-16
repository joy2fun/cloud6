export default {
  pages: [
    'pages/index/index',
  ],
  "subpackages": [
    {
      "root": "pagesA",
      "pages": [
        "pages/test",
      ],
      "independent": true
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
