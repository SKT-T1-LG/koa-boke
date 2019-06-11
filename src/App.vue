<template>
    <div id="app">
        <router-view/>
        <cube-tab-bar
                class="bar"
                v-model="selectedLabelSlots"
                show-slider
                inline
                @click="clickHandler">
            <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
                <!-- name为icon的插槽 -->
                <i slot="icon" :class="item.icon"></i>
                <!-- 默认插槽 -->
                {{item.label}}
            </cube-tab>
        </cube-tab-bar>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        selectedLabelSlots: 'Home',
        tabs: [{
          label: 'Home',
          icon: 'cubeic-home'
        }, {
          label: 'Like',
          icon: 'cubeic-like'
        }, {
          label: 'Vip',
          icon: 'cubeic-vip'
        }, {
          label: 'Me',
          icon: 'cubeic-person'
        }]
      }
    },
    methods: {
      clickHandler(label) {
        this.$router.push('/' + label)
      }
    }
  }
</script>
<style lang="stylus" scoped>
    .bar {
        z-index: 100
        position: fixed
        bottom: 0
        width: 100%
        background-color: gray
    }
</style>
