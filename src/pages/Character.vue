<template>
  <div v-if="character" class="character">
    <img
      :src="character.image"
      :alt="character.name"
      class="character__image"
    />
    <h1 class="character__name">{{ character.name }}</h1>
    <p>Статус: {{ character.status }}</p>
    <p>Вид: {{ character.species }}</p>
    <p>Пол: {{ character.gender }}</p>
    <router-link to="/" class="character__back">Назад</router-link>
  </div>
</template>

<script>
import { fetchCharacterById } from '../api/characters';
export default {
  name: 'Character',
  data() {
    return {
      character: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    const response = await fetchCharacterById(id);
    this.character = response.data;
  },
};
</script>

<style lang="scss" scoped>
.character {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  &__image {
    width: 200px;
    height: auto;
    border-radius: 50%;
    border: 4px solid #e0e0e0;
    margin-bottom: 15px;
  }

  &__name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
    text-align: center;
  }

  &__back {
    display: inline-block;
    padding: 10px 20px;
    background-color: #a5cee7;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
}
</style>
