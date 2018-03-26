<template>
  <div>
    <nav>
      <ul v-for="(route, index) in routes">
        <MenuItem :data="route"/>
      </ul>

    </nav>
    <router-view/>
  </div>
</template>
<style lang="sass">
nav
  display: flex
  background: linear-gradient(180deg,#efefef 0,#efefef)
  box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23)
  height: 34px

  ul
    flex: 1
    border-right: 1px solid #d9d9d9
    padding: 0

    li
      display: flex
      border-bottom: 1px solid #d9d9d9

      a
        flex: 1
        text-align: center
        width: 100%
        text-decoration: none
        color: #444444
        padding: .5rem;

    .dropdown
      display: none

      ul
        border-right: 0
        background: linear-gradient(180deg,#efefef 0,#efefef)
        box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23)

        li

        li:last-child
          border-bottom: 0

    .dropdown.active
      display: flex



</style>

<script>
import MenuItem from '@/components/MenuItem'
export default {
  name: 'Menu',
  components: {
    MenuItem
  },
  data () {
        return {
            routes: [
              {
                path:'',
                label:'Accueil',
                childRoutes: [
                  {
                    path:'...',
                    label:'......'
                  },
                  {
                    path:'...',
                    label:'......'
                  }
                ]
              },
              {
                path:'test',
                label:'Test'
              }
            ]
        }
    }

}
</script>
