<template>
  <div>
    添加学生:
    <!-- {{ storeName }} {{ storeAge }} -->
    <!-- {{ name }} {{ age }} -->
    <input type="text" v-model="name">
    <button @click="changeStudent({name, number: 1})">确认</button>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";

export default {
  data() {
    return {
      name: ""
      // storeName: this.$store.state.name
    };
  },
  // computed: {
  //     storeName () {
  //         return this.$store.state.name
  //     }
  // },
  // computed: mapState(['name','age']),
  // computed: mapState({
  //     storeName: state => state.name,
  //     storeAge: state => state.age
  // }),
  computed: {
    ...mapState({
      storeName: state => state.name,
      storeAge: state => state.age
    }),

    a() {
      return "111";
    }
  },
  methods: {
      ...mapActions('student', ['changeStudent'])
    // add() {
      //this.$emit('add',this.name)//自定义监听事件向父级传值

    //   this.bus.$emit("add", this.name);//事件

    // this.$store.state.studentList.push(this.name);

    // this.$store.commit('changeStudent',{name: this.name,number: 1});
    // this.$store.dispatch('changeStudent',{name: this.name,number: 1});


    // }
  }
};
</script>

<style scoped>
button {
  margin-left: 15px;
  line-height: 19px;
  width: 60px;
}
</style>