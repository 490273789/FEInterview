<template>
<ul id="course-list">
    <li v-for="item in courseList"
        :key="item.name"
        class="course">
           <img :src="item.poster" alt="" class="poster">
           <p class="title"> {{ item.name }} </p>
           <div class="course-info">
               <div class="price" v-if="item.price > 0">￥{{ item.price }}</div>
               <div class="price free" v-else>免费</div>
               <div class="institution">渡一教育</div>
           </div>
    </li>
</ul>

</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('course', ['courseList'])//前面不写参数是直接找跟目录中的参数，只要通过此方法寻找state意外的内容都需要定义命名空间
        // courseList () {//取model中的内容是需要加上model中名字。
        //     return this.$store.state.course.courseList
        // }
    }
}
</script>

<style scoped>
    #course-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 14px;
    }

    .course {
        width: 220px;
        padding: 10px;
        border: 1px solid transparent;
        margin-bottom: 20px;
    }

    .course:hover {
        border-color: #ddd;
        box-shadow: 1px 1px 2px 1px #ECECEC;
    }

    .poster {
        width: 220px;
        height: 123px;
    }

    .title {
        color: #333;
        margin: 5px 0;
        min-height: 40px;
        cursor: pointer;
    }
    
    .title:hover {
        color: #62b4f7;
    }

    .course-info {
        display: flex;
        justify-content: space-between;
    }

    .price {
        color: #e85308;
    }
    
    .price .free {
        color: #5fb41b;
    }

    .institution {
        color: #999;
    }
</style>