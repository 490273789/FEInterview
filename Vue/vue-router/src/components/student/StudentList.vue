<template>
  <div>学生列表:{{ studentList}}
    <ul>
      <li v-for="(item,index) in studentList" :key="index+item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>

import { mapState,mapGetters } from 'vuex';

export default {
  // props: ['student-list']
  data() {
    return {
      // studentList: []
    };
  },
  computed: {
    ...mapState('student', {
      studentList: state => state.studentList
    }),
    ...mapGetters('student', {
      student: 'newStudent'
    }),
    ...mapGetters('student', ['newStudent'])
    // newStudent () {
    //   return this.$store.getters.newStudent
    // }
  },
  created() {
    this.bus.$on("add", name => {
      this.studentList.push(name);
    });
  }
};
</script>

<style scoped>
</style>