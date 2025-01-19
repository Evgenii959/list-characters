<template>
  <div class="list">
    <div class="list__wrapper">
      <router-link
        v-for="character in characters"
        :key="character.id"
        :to="{ name: 'Character', params: { id: character.id } }"
        class="list__card"
      >
        <img
          :src="character.image"
          :alt="character.name"
          class="list__card-image"
        />
        <p class="list__card-name">{{ character.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterList',
  computed: {
    characters() {
      return this.$store.state.characters;
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 25px;
    width: 100%;
    max-width: 900px;
    margin-top: 20px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #333;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;

    &-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 15px;
      border: 4px solid #a5cee7;
    }

    &-name {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      color: #444;
      margin-top: 10px;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
