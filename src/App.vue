<template>
  <div id="app">
    <header v-bind:style="styleObject">
      <Menu/>
    </header>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Roboto')
@import "node_modules/normalize.css/normalize";
*
  box-sizing: border-box


ul
  margin: 0
  padding: 0
  list-style: none


header
  background: #f2f2f2
  margin: 0 auto
  width: 600px

</style>

<script>
import Menu from '@/components/Menu'
export default {
    name: 'App',
    components: {
      Menu
    },
    mounted() {
        window.addEventListener('resize', this.reload);
    },
    updated(){

    },

    data: function(){
        return {
            timoutHandle: null,
            styleObject: {
              width: '100%'
            }
        }
    },
    watch: {

    },
    methods: {
      reload() {
          window.clearTimeout(this.timeoutHandle);
          this.timeoutHandle = window.setTimeout(() =>{
            this.styleObject.width = document.body.clientWidth / 2 + 'px'
            console.log(':)')
          },3);
      }
    }
}
</script>
