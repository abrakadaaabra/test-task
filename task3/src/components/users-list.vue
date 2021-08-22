<template>
  <ul class="users-list">
    <user
      v-for="{ name, email, phone, id } in users"
      :key="id"
      v-bind="{ name, email, phone }"
    />
  </ul>
</template>

<script>
import User from './user.vue';

export default {
  name: 'users-list',
  components: {
    User,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.users-list {
  width: 30%;
}
</style>
