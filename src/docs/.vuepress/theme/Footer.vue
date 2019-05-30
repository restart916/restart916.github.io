<template>
  <footer class="footer pb-5 text-secondary">
    Yongsang Lee
    | Powered by
    <a
      href="https://vuepress.vuejs.org/"
      rel="noopener"
      target="_blank"
    >
      VuePress
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
