<template>
  <header class="header">
    <router-link to="/" class="header__link">Главная</router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #a5cee7;
  padding: 20px;
  display: flex;
  justify-content: center;

  &__link {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    text-align: center;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
