<template>
  <ul class="accueil">
    <li><i class="material-icons">add</i></li>
    <li><i class="material-icons">add</i></li>
    <li><i class="material-icons">add</i></li>
  </ul>

</template>

<style lang="sass">
.accueil

  li
    background: #193f5e
    width: 60px
    height: 60px
    color: #ffffff
    border-radius: 50%
    display: flex
    align-items: center
    margin: 1rem

    .material-icons
      text-align: center
      flex: 1



</style>

<script>
export default {
  name: 'Accueil',
  data () {
    return {

    }
  }
}
</script>
