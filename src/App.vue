<template>
  <div id="app">
    <CalendarWeek />
  </div>
</template>
<script>
import  CalendarWeek  from './components/CalendarWeek.vue';

export default{
  name: 'App',
  components:{
    CalendarWeek
  }
}
</script>