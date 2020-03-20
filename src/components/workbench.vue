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
            <span class="blk-edit-btn" @click="editModuleHdl(idx)">编辑</span>
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