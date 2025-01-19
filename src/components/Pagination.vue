<template>
  <div class="pagination">
    <button
      @click="onPageChange(currentPage - 1)"
      :disabled="currentPage === 1"
      class="pagination__button"
    >
      Назад
    </button>
    <button
      @click="onPageChange(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="pagination__button"
    >
      Вперед
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    onPageChange: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  &__button {
    padding: 12px 18px;
    font-size: 16px;
    font-weight: bold;
    background-color: #a5cee7;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #0056b3;
      transform: scale(1.05);
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
}
</style>
