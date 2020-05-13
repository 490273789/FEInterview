<template>

<div>
    <!-- <add-student @add="add"></add-student>
    <student-list :student-list="studentArr"></student-list>   -->
    <!-- :student-list="studentArr" 父级向子级传值 -->

    <add-student></add-student>
    <student-list></student-list>  
</div>
</template>

<script>

import AddStudent from '@/components/student/AddStudent'
import StudentList from '@/components/student/StudentList'

export default {
    data () {
        return {
            studentArr: []
        }
    },
    methods: {
        add(name) {
            this.studentArr.push(name);
        }
    },

    components: {
        AddStudent,
        StudentList
    }
}
</script>

<style scoped>

</style>