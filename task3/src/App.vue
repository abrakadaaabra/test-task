<template>
  <div id="app">
    <users-list
      v-if="usersExist"
      :users="users"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UsersList from './components/users-list.vue';

export default {
  name: 'App',
  components: {
    UsersList,
  },
  computed: {
    ...mapState([
      'users',
    ]),
    usersExist() {
      return this.users && this.users.length;
    },
  },
  created() {
    this.$store.dispatch('getUsers');
  },
};
</script>
