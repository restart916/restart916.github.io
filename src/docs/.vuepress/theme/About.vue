<template>
  <div class="about py-md-5 px-0 py-4">
      <div>
          About Hyunjin Yoon
      </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 'About',
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
</style>

<style lang="scss" scoped>
@import '~styles/theme'
</style>
