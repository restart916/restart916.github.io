<template>
  <header class="navbar d-flex justify-content-center justify-content-md-between px-md-0">
    <!-- <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/> -->
    <div class="">
      <router-link
        :to="$localePath"
        class="home-link mt-2"
      >
        <img
          class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
        >
        <span
          ref="siteName"
          class="site-name"
          v-if="$siteTitle"
          :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span>
      </router-link>
    </div>

    <div
      class="links"
      :style="{
        'max-width': linksWrapMaxWidth + 'px'
      }"
    >
      <NavLinks class="can-hide mr-md-3"/>
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false"/>
    </div>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING -
          (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
@import './styles/config.styl'

$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  position relative
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    white-space nowrap
    font-size 0.9rem
    .search-box
      flex: 0 0 auto
      vertical-align top
    .nav-links
      flex 1
@media (max-width: $MQMobile)
  .navbar
    border-bottom: solid 1px
/*
@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
  .navbar
    position fixed
    z-index 20
    top 0
    left 0
    right 0
    height $navbarHeight
    background-color #fff
    box-sizing border-box
    border-bottom 1px solid $borderColor
    padding-left: 4rem;

  .sidebar-mask
    position fixed
    z-index 9
    top 0
    left 0
    width 100vw
    height 100vh
    display none

  .sidebar
    font-size 15px
    background-color #fff
    width $sidebarWidth
    position fixed
    z-index 10
    margin 0
    top $navbarHeight
    left 0
    bottom 0
    box-sizing border-box
    border-right 1px solid $borderColor
    overflow-y auto

  $mobileSidebarWidth = $sidebarWidth * 0.82

  // narrow desktop / iPad
  @media (max-width: $MQNarrow)
    .sidebar
      font-size 15px
      width $mobileSidebarWidth
    .page
      padding-left $mobileSidebarWidth

  // wide mobile
  @media (max-width: $MQMobile)
    .sidebar
      top 0
      padding-top $navbarHeight
      transform translateX(-100%)
      transition transform .2s ease
    .page
      padding-left 0
    .theme-container
      &.sidebar-open
        .sidebar
          transform translateX(0)
      &.no-navbar
        .sidebar
          padding-top: 0 */

</style>
