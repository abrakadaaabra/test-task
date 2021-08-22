<template>
  <li class="user">
    <div class="user__name">{{ name }}</div>
    <a
      class="user__email"
      :href="`mailto:${email}`"
    >
      {{ email }}
    </a>
    <a
      class="user__phone"
      :href="`tel:${phone}`"
    >
      {{ phone }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'user',
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },

};
</script>

<style scoped>
.user {
    padding: 10px;
    border: 2px solid black;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: flex-start;
}
</style>
