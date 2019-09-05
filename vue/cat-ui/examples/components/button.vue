<template>
  <div class="catbtnwrapper">
    <cat-header backIcon title="按钮"></cat-header>
    <cat-button>default</cat-button>
    <cat-button type="primary" size="large">primary</cat-button>
    <cat-button type="danger" size="large">danger</cat-button>

    <cat-button size="normal">default</cat-button>
    <cat-button type="primary" size="normal">primary</cat-button>
    <cat-button type="danger" size="normal">danger</cat-button>

    <cat-button icon="headphones" size="normal">default</cat-button>
    <cat-button icon="headphones" type="primary" size="normal">primary</cat-button>
    <cat-button icon="headphones" type="danger" size="normal">danger</cat-button>

    <cat-button size="small">default</cat-button>
    <cat-button type="primary" size="small">primary</cat-button>
    <cat-button icon="headphones" type="danger" size="small">danger</cat-button>

    <cat-button :disabled="true">default</cat-button>
    <cat-button type="primary" :disabled="true">primary</cat-button>
    <cat-button type="danger" :disabled="true">danger</cat-button>

    <cat-button plain>default</cat-button>
    <cat-button type="primary" plain>primary</cat-button>
    <cat-button type="danger" plain>danger</cat-button>

    <cat-button :disabled="true" plain>default</cat-button>
    <cat-button type="primary" :disabled="true" plain>primary</cat-button>
    <cat-button type="danger" :disabled="true" plain>danger</cat-button>
  </div>
</template>

<script>

export default {
  name: "Button",
  methods: {
  },
  created() {
  }
};
</script>

<style scoped>
.cat-button{
  margin: 10px 0;
}
</style>
