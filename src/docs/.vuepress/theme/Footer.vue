<template>
  <footer class="footer pb-5 text-secondary">
    Wally Lee
    | Powered by
    <a
      href="https://vuepress.vuejs.org/"
      rel="noopener"
      target="_blank"
    >
      VuePress
    </a>
    | Theme by
    <a
      href="https://hyunjinyoon-christine.github.io"
      rel="noopener"
      target="_blank"
    >
      Hyunjin Yoon
    </a>
    © {{ thisYear }}
  </footer>
</template>

<script>
export default {
  data () {
    return {
      thisYear: new Date().getFullYear()
    }
  }
}
</script>
