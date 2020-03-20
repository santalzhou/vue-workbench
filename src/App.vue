<template>
  <div id="app">
    <workbench :config="config" :color="primaryColor">
        <template v-slot:module1>
          第一个模块编号的内容
        </template>
        <template v-slot:module2>
          第2个模块编号的内容
        </template>
        <template v-slot:module3>
          第three个模块编号的内容
        </template>
        <template v-slot:modulea>
          第6个模块编号的内容
        </template>
    </workbench>
  </div>
</template>

<script>
import workbench from "./components/workbench";
export default {
  name: "app",
  components: {
    workbench
  },
  data() {
    return {
      primaryColor: '#fdd',
      config: [
        {
          name: "第一块",
          nickName: "第一块",
          order: 1, // 排序
          showOr: "1", // 是否显示
          width: "1/3",
          height: 160,
          moduleId: "1" //模块编号--- 顺序改变时，向上给调用组件
        },
        {
          name: "第二块",
          nickName: "第二块",
          order: 2,
          showOr: "1",
          rowsShow: 5,
          width: "1/3",
          height: 160,
          moduleId: "2"
        },
        {
          name: "第三块",
          nickName: "第三块",
          order: 3,
          showOr: "1",
          rowsShow: 5,
          width: "1/3",
          height: 160,
          moduleId: "3"
        },
        {
          name: "第四块",
          nickName: "第四块",
          order: 4,
          showOr: "1",
          rowsShow: 5,
          width: "1/3",
          height: 160,
          moduleId: "4"
        },
        {
          name: "第五块",
          nickName: "第五块",
          order: 6,
          showOr: "1",
          rowsShow: 5,
          width: "1/3",
          height: 160,
          moduleId: "5"
        },
        {
          name: "第六块",
          nickName: "第六块",
          order: 5,
          showOr: "1",
          rowsShow: 5,
          width: "1/3",
          height: 160,
          moduleId: "a"
        }
      ]
    };
  }
};
</script>

<style>
</style>
