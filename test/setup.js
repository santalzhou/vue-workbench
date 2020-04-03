require('jsdom-global')() // 在node 中添加一个浏览器环境

global.expect = require('expect.js') // 挂载到全局