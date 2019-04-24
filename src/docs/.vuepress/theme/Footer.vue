<template>
  <footer class="footer pb-5">
    Hyunjin Yoon
    | Powered by
    <a
      href="https://vuepress.vuejs.org/"
      rel="noopener"
      target="_blank"
      class="text-primary"
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
