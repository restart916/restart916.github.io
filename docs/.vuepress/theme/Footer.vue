<template>
  <footer class="footer">
    Hyunjin Yoon
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
