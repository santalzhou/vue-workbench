# vue-workbench

> vue custom workbench component

    a simple custom workbench components, modify the page display module style
## Install

``` bash
 npm install vue-workbench
```
## Example
 Demo
``` bash
<template>
    <workbench :config="config" :color="primaryColor" @resize="resizeHdl">
        <template v-slot:module1>
          第一个模块的内容
        </template>
        <template v-slot:module2>
          第二个模块的内容
        </template>
        <template v-slot:module3>
          内容溢出时, overflow:auto
        </template>
        <!-- 多个template -->
    </workbench>
</template>

<script>
import workbench from "vue-workbench";
export default {
  components: { workbench },
  data() {
    return {
      primaryColor: '#fdd',  // 主题色，非必须
      config: [              // 配置项，必须， 见下表
        { 
          name: "第一块",
          nickName: "第一块",
          order: 1,
          width: "1/3",
          height: 160,
          moduleId: "1"
        },
        {
          name: "第二块",
          nickName: "第二块",
          order: 2,
          rowsShow: 5,
          width: "1/3",
          height: 160,
          moduleId: "2"
        },
        // ...多个配置项
      ]
    };
  },
  methods: {
    resizeHdl(cfg){ // 参数是修改过的配置文件
      // ... 做一些事情 
    }
  }
};
</script>

```


<img src="https://github.com/santalzhou/vue-workbench/blob/master/page.png" width="50%" alt="页面样式">


<img src="https://github.com/santalzhou/vue-workbench/blob/master/pageEdit.png" width="50%" alt="页面样式">


## Props

config

| Property  | Type |required|
| :----- | :----: |:----:|
| name  | String |true |
| nickName  | String |false |
| order  | Number |true |
| width  | String |true |
| height  | Number |false |
| moduleId  | String |true |

order: 1,2,3...

width: 1/4, 1/3, 1/2, 2/3, 3/4, 100%

moduledId: 唯一，每块对应的插槽名称为'module'+moduledId

## Events
  
  resize: 每次更改编辑框都会触发此事件，返回调整后的config(Array, 配置项)

## License
MIT

