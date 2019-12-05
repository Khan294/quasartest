<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  mounted () {
    console.log('State value on mounted:', this.$store.state.teststore.testState)
  }
}
</script>
