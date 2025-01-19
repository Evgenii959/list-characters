<template>
  <div class="home">
    <SearchBar :searchQuery="searchQuery" :onSearch="onSearch" />
    <CharacterList />
    <Pagination
      :currentPage="page"
      :totalPages="totalPages"
      :onPageChange="fetchPage"
    />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import CharacterList from '../components/CharacterList.vue';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
    CharacterList,
    Pagination,
  },
  data() {
    return {
      searchQuery: '',
      page: 1,
    };
  },
  computed: {
    totalPages() {
      return this.$store.state.totalPages;
    },
  },
  methods: {
    fetchPage(page) {
      this.page = page;
      this.$store.dispatch('getCharacters', { page, name: this.searchQuery });
    },
    onSearch(query) {
      this.searchQuery = query;
      this.page = 1;
      this.fetchPage(1);
    },
  },
  created() {
    this.fetchPage(1);
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
}
</style>
