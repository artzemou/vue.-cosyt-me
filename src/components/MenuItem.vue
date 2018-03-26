<template>
<ul>
  <li @click="clicked"><router-link :to="`/${this.data.path}`">{{this.data.label}}</router-link></li>
  <li v-if="this.data.childRoutes" class="dropdown" v-bind:class="{active: isActive}">
    <ul>
      <li v-for="(route, index) in this.data.childRoutes">
        <router-link :to="`/${route.path}`">{{route.path}}</router-link>
      </li>
    </ul>
  </li>
</ul>
</template>

<script>
export default {
  name: 'MenuItem',
  data () {
    return {
      isActive: false
    }
  },
  props:['data'],
  mounted() {
      console.log(this.data)
  },
  methods:{
    clicked (){
      this.isActive = !this.isActive
    }
  }
}
</script>
