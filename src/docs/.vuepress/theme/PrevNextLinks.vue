<template>
  <section class="prev-next-links mt-5 pt-4 border-top">
    <div class="links-wrapper d-flex">
      <router-link v-if="prev" class="prev" :to="prev.path">
        <!-- <BaseIcon iconName="chevron-left"><ChevronLeft/></BaseIcon> -->
        <div class="link-text">← {{ prev.title }}</div>
      </router-link>
      <router-link v-if="next" class="next" :to="next.path">
        <div class="link-text">{{ next.title }} →</div>
        <!-- <BaseIcon iconName="chevron-right"><ChevronRight/></BaseIcon> -->
      </router-link>
    </div>
  </section>
</template>

<script>
// import BaseIcon from "@/icons/Base";
// import ChevronRight from "@/icons/ChevronRight";
// import ChevronLeft from "@/icons/ChevronLeft";

export default {
  components: {
    // BaseIcon,
    // ChevronRight,
    // ChevronLeft
  },
  data () {
    return {
      postList : []
    }
  },
  mounted: function(){
    this.postList = this.$site.pages
    .filter(item => {
      console.log(item);
      if(this.$page.frontmatter.home){
        return item.path.startsWith('/posts/')
      } else if (this.$page.frontmatter.bookDetail && item.title) {
        return item.path.startsWith('/book/')
      }
    }).sort((a, b) => {
      return new Date(b.frontmatter.date || b.lastUpdated) - new Date(a.frontmatter.date || a.lastUpdated)
    })
  },
  computed: {
    currentIndex() {
      console.log('this.postList', this.postList)
      for (let i = 0; i < this.postList.length; i++) {
        if (this.postList[i].key === this.$page.key) {
          return i;
        }
      }
    },
    prev() {
      return this.currentIndex > 0 ? this.postList[this.currentIndex - 1] : null;
    },
    next() {
      return this.currentIndex < this.postList.length - 1
        ? this.postList[this.currentIndex + 1]
        : null;
    }
  }
};
</script>
