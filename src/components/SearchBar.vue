<template>
  <div class="search">
    <input
      v-model="query"
      @keyup.enter="handleSearch"
      placeholder="Поиск персонажей"
      class="search__input"
    />
    <button @click="handleSearch" class="search__button">
      <img src="../assets/images/search.svg" alt="поиск" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    searchQuery: {
      type: String,
      required: true,
    },
    onSearch: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      query: this.searchQuery,
    };
  },
  methods: {
    handleSearch() {
      this.onSearch(this.query);
    },
  },
  watch: {
    searchQuery(newQuery) {
      this.query = newQuery;
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;

  &__input {
    max-width: 400px;
    width: 100%;
    padding: 12px 18px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      border-color: #007bff;
      box-shadow: 0 2px 6px rgba(0, 123, 255, 0.3);
    }
  }

  &__button {
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 2px solid #ccc;
    border-radius: 8px;
    outline: none;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
