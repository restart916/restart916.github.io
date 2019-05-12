<template>
  <div class="about py-md-5 px-0 py-4">
      <div>
          <h2 class="mb-4">
              About Hyunjin Yoon
          </h2>
          <div>
              <div class="text-secondary">
                  Front-End Developer or Product Designer<br>
                  5년동안 프로덕트 디자이너로 일했고 Front-End 공부를 하고 있는 윤현진입니다.              
              </div>
              <div>
                <a href="">
                    email
                </a>
                <a href="http://tiny.cc/gxwp4y" target="_blank">
                    디자인 포트폴리오
                </a>
                <a href="" target="_blank">
                    <i class="fas fa-camera"></i>
                </a>
                <a href="" target="_blank">
                    github
                </a>
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
