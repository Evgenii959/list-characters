<template>
  <footer class="footer">
    <p class="footer__year">2025</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  background-color: #a5cee7;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__year {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    text-align: center;
  }
}
</style>
