<template>
  <div class="em-wrap">
    <section class="em-body">
      <p class="em-title">
        <span class="em-title-label">模块名：</span>
        <span class="em-title-name">{{name}}</span>
      </p>
      <ul class="cfg-list">
        <li class="cfg-item">
          <span class="label">昵称</span>
          <input v-model="nickName" placeholder="请输入模块昵称" />
        </li>
        <li class="cfg-item">
          <span class="label">排序</span>
          <input v-model="order" :placeholder="'请输入数值(1~'+this.length+')'" @change="chgOrderHdl" />
        </li>
        <li class="cfg-item">
          <span class="label">宽度</span>
          <select v-model="width">
            <option>1/4</option>
            <option>1/3</option>
            <option>1/2</option>
            <option>2/3</option>
            <option>3/4</option>
            <option>100%</option>
          </select>
        </li>
        <li class="cfg-item">
          <span class="label">高度(px)</span>
          <input v-model="height" placeholder="请输入高度值(50~500)" @change="chgHeightHdl" />
        </li>
      </ul>
      <p class="em-footer">
        <span class="em-btn confirm-btn" @click="confHdl" :style="{backgroundColor: color? color:'transparent'}">确定</span>
        <span
          class="em-btn cancel-btn"
          @click="backHdl"
        >返回</span>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    length: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      name: "",
      nickName: "",
      order: 0,
      showOr: "",
      rowsShow: 0,
      width: "",
      height: 0,
      moduleId: "0"
    };
  },
  watch: {
    config: {
      handler(val) {
        this.name = val.name;
        this.nickName = val.nickName;
        this.order = val.order;
        this.showOr = val.showOr;
        this.width = val.width;
        this.height = val.height;
        this.moduleId = val.moduleId;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    backHdl() {
      this.$emit("closeEdit");
    },
    confHdl() {
      this.$emit("chgEdit", {
        name: this.name,
        nickName: this.nickName,
        order: this.order,
        showOr: this.showOr,
        width: this.width,
        height: this.height,
        moduleId: this.moduleId
      });
    },
    chgOrderHdl() {
      if (this.order > this.length || this.order <= 0) {
        this.order = 1;
      }
    },
    chgHeightHdl() {
      if (this.height > 800 || this.height < 50) {
        this.height = 100;
      }
    }
  }
};
</script>

<style scoped lang="scss">
$borderColor: #d3d3d3;
@mixin commonBar {
  height: 30px;
  margin: 0;
  padding: 8px 16px;
}
@mixin flexC {
  display: flex;
  align-items: center;
}
.em-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2020;
  &:after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }
  .em-body {
    display: inline-block;
    width: 400px;
    vertical-align: middle;
    text-align: left;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid $borderColor;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    font-size: 14px;
    color: #3e3e3e;
    .em-title {
      @include flexC;
      @include commonBar;
      border-bottom: 1px solid lighten($borderColor, 5);
      .em-title-label {
        width: 64px;
      }
      .em-title-name {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .cfg-list {
      padding: 12px 28px;
      font-size: 13px;
      .cfg-item {
        list-style-type: none;
        height: 40px;
        @include flexC;
        .label {
          width: 70px;
          margin: 0 12px;
        }
        input,
        select {
          width: 160;
          height: 24px;
          padding: 0 8px;
          border-radius: 4px;
          border: 1px solid $borderColor;
          font-size: 13px;
        }
        select {
          width: 174px;
        }
      }
    }
    .em-footer {
      @include commonBar();
      border-top: 1px solid lighten($borderColor, 5);
      .em-btn {
        float: right;
        text-align: center;
        margin: 0 8px;
        line-height: 24px;
        width: 44px;
        border: 1px solid $borderColor;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
}
</style>