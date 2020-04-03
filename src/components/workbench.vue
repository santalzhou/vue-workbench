<template>
  <div class="wb-page">
    <div class="wb-wrap" v-if="defaultConfig.length > 0">
      <section
        class="wb-module"
        v-for="(item, idx) in defaultConfig"
        :key="idx"
        :style="{'width': widthTran[item.width]*100+'%', 'height': item.height+'px', 'order': item.order}"
      >
        <div class="wb-block">
          <header class="blk-header" :style="{backgroundColor: color? color:'transparent'}">
            <p class="blk-title">{{item.nickName || item.name}}</p>
            <svg t="1585921105811"  class="icon blk-edit-btn" @click="editModuleHdl(idx)" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4404" width="16" height="16"><path d="M928.91648 546.74432v312.4736c0 38.49728-31.68768 69.69856-69.62688 69.69856H164.78208c-38.43072-0.1536-69.54496-31.26784-69.69856-69.69856V164.7104c0-38.4256 31.68768-69.62688 69.69856-69.62688h381.96224a34.74432 34.74432 0 1 0 0-69.48352H164.98688A139.3152 139.3152 0 0 0 25.6 164.98688v694.02624C25.6 936.06912 87.99744 998.4 164.98688 998.4h694.02624A139.3152 139.3152 0 0 0 998.4 859.01312v-312.2688a34.74432 34.74432 0 0 0-69.48352 0z m46.208-447.21152a34.74432 34.74432 0 0 0 0.2048-49.33632c-13.77792-13.38368-39.74144-13.50144-53.40672 0L393.8304 578.28864c-6.59456 6.51776-6.31296 15.60064-6.3488 24.86784a34.88256 34.88256 0 0 0 10.14272 24.74496c13.1328 13.20448 35.65056 13.48096 49.33632-0.2048L975.12448 99.5328z" p-id="4405" fill="#707070"></path></svg>
          </header>
          <section class="blk-main">
            <slot :name="'module'+item.moduleId"></slot>
          </section>
        </div>
      </section>
    </div>

    <edit-module
      :color="color"
      :config="defaultConfig[activeIdx]"
      :length="defaultConfig.length"
      v-if="showEditModule"
      @closeEdit="closeEditHdl"
      @chgEdit="chgEditHdl"
    ></edit-module>
  </div>
</template>

<script>
import editModule from "./editModule";
export default {
  props: {
    config: {
      type: Array,
      default() {
        return [];
      }
    },
    color: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      showEditModule: false,
      activeIdx: 0,
      defaultConfig: [],
      widthTran: {
        '1/3': 1/3,
        '1/4': 1/4,
        '1/2': 1/2,
        '2/3': 2/3,
        '3/4': 3/4,
        '100%': 1,
      }
    };
  },

  components: {
    editModule
  },
  watch: {
    config: {
      handler(val) {
        this.defaultConfig = val;
      },
      immediate: true
    }
  },

  methods: {
    editModuleHdl(idx) {
      this.activeIdx = idx;
      this.showEditModule = true;
    },

    closeEditHdl() {
      this.showEditModule = false;
    },

    chgEditHdl(currConfig) {
      this.showEditModule = false;
      this.resizeModule(currConfig);
    },

    resizeModule(currConfig) {
      let resultOrderArr = [];
      var copyDConfig = this.defaultConfig.concat();

      if (this.defaultConfig[this.activeIdx].order !== currConfig.order) {
        resultOrderArr = this.resizeOrder(
          this.defaultConfig[this.activeIdx].order,
          Number(currConfig.order)
        );

        copyDConfig.forEach((item, idx) => {
          item.order = resultOrderArr[idx];
        });
      }

      Object.assign(copyDConfig[this.activeIdx], currConfig);
      this.defaultConfig = copyDConfig.concat();
      this.$emit("resize", copyDConfig); 
    },

    resizeOrder(origOrder, currOrder) {
      let origOrderArr = this.defaultConfig.map(item => Number(item.order));
      if (origOrder < currOrder) {
        return origOrderArr.map(item => {
          if (item <= currOrder && item >= origOrder) {
            return item - 1;
          } else if (item == origOrder) {
            return currOrder;
          } else {
            return item;
          }
        });
      } else {
        return origOrderArr.map(item => {
          if (item < origOrder && item >= currOrder) {
            return item + 1;
          } else if (item == origOrder) {
            return currOrder;
          } else {
            return item;
          }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
$borderColor: #d3d3d3;
.wb-page {
  .wb-wrap {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    color: #3e3e3e;
    .wb-module {
      box-sizing: border-box;
      padding: 4px;
      overflow: hidden;
      .wb-block {
        border: 1px solid $borderColor;
        border-top: $borderColor;  // ?? 谷歌  有个间隙
        border-left: $borderColor;
        border-right: $borderColor;
        box-shadow: 0px 0 0px 1px #f1f1f1;
        border-radius: 4px;
        height: 100%;
        display: flex;
        flex-direction: column;
        .blk-header {
          display: flex;
          align-items: center;
          height: 32px;
          padding: 0 12px;
          border-bottom: 1px solid lighten($borderColor, 5);
          .blk-title {
            flex: 1;
            margin: 0 20px 0 0;
            font-size: 14px;
            line-height: 20px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .blk-edit-btn {
            width: 26px;
            font-size: 12px;
            cursor: pointer;
          }
        }
        .blk-main {
          flex: 1;
          padding: 12px;
          overflow-x: auto;
          overflow-y: auto;
        }
      }
    }
  }
}
</style>