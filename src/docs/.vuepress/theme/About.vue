<template>
  <div class="about py-md-5 px-0 py-4">
      <div>
          <h2 class="mb-4">
              About Yongsang Lee
          </h2>
          <div>
              <div class="text-secondary">
                  Software Engineer<br>
              </div>
              <div class="d-flex mt-2">
                <div>
                    <a href="https://github.com/restart916" target="_blank" class="text-secondary mr-1">
                        <i class="fab fa-github fa-lg hover-color"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yong-sang-lee-63236a35/" target="_blank" class="text-secondary mr-1">
                        <i class="fab fa-linkedin fa-lg hover-color"></i>
                    </a>
                    <a href="https://medium.com/@flatcherlynd" target="_blank" class="text-secondary mr-1">
                        <i class="fab fa-medium-m fa-lg hover-color"></i>
                    </a>
                    <a href="https://www.facebook.com/lee.yongsang" target="_blank" class="text-secondary">
                        <i class="fab fa-facebook-square fa-lg hover-color"></i>
                    </a>
                </div>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-md-6">

              </div>
              <div class="col-md-6">

              </div>
          </div>
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
