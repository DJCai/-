module.exports = {
  presets: [
    '@vue/app'
  ],
  //iview的按需加载的配置
  "plugins": [["import", {
      "libraryName": "iview",
      "libraryDirectory": "src/components"
    }]]
  
}
