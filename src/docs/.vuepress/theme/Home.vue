<template>
  <div class="home py-md-5 px-0 py-4">
    <div
      v-if="filteredList.length === 0"
      class="empty-list"
    >
      아직 준비 중이에요 👀
    </div>

    <div
      v-for="page of filteredList"
      :key="page.key"
      class="list-item"
      v-if="page.title"
    >
      <div v-if="page.frontmatter.excerpt" class="py-3 border-bottom ">
        <router-link
          :to="page.path"
          class="item-title text-dark"
        >
          <div class="hover-underline">
            <h4 class="mb-2 ">
              {{ page.title }}
            </h4>
            <p class="text-secondary mb-0">
              {{ page.frontmatter.excerpt }}
            </p>
          </div>
        </router-link>
      </div>
      <div v-else>
        <h4 class="py-3 border-bottom mb-0">
          <router-link
            :to="page.path"
            class="item-title text-dark hover-underline"
          >
          {{ page.title }}
          </router-link>
        </h4>
      </div>
    </div>

    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
      list: {
          type: Array,
          default: () => []
      }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },

    filteredList() {
      // Order by publish date, desc
      console.log('this.$page.frontmatter',this.$page.frontmatter);

      return this.$site.pages
        .filter(item => {
          console.log(item);
          if(this.$page.frontmatter.home){
            return item.path.startsWith('/posts/')
          } else if (this.$page.frontmatter.book) {
            return item.path.startsWith('/book/')
          }

        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date || b.lastUpdated) - new Date(a.frontmatter.date || a.lastUpdated)
          // return a.title > b.title
        })
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.home
  .hero
    text-align center
    img
      max-width 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
