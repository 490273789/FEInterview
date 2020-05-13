<template>
<div>
    问题: {{ question }}
    <button @click="handleClick">click</button>
</div>

</template>

<script>
export default {
    created () {
        const questionId = this.$route.params.id;
        const index = this.questionList.findIndex( item => item.questionId == questionId);
       
        console.log(questionId);
        if (index == -1) {
            // 跳转 a页面 -> b页面 -> c页面
            // 不填写 则刷新到本页面
            // -1  跳转到上一个页面
            // this.$router.go(-1)

            // replace:跳转到写好的路径 [a, b, c, d]--> [a, b, c, e] d页面跳转到e页面后d的位置将变化为e
            this.$router.replace({name: 'err'});

            // push：跳转到指定页面 [a, b, c, d, e] d页面跳转到e页面会在数组后添加一位，此页面使用push会有无法返回的假象
            // 主要是因为返回后会进入d，d是错误的页面所以又会跳转到e页面
            // this.$router.push({name: 'err'});
        } else {
            this.question = this.questionList[index].title;
        }
    },
    methods: {
        handleClick () {
            // this.$router.push({name: 'err'});
        }
    },
    data () {
        return {
            question: '',
            questionList: [
                {
                    questionId: 201801,
                    title: '到底什么是es6中的class（类）？怎么实现class（类）？'
                },
                {
                    questionId: 201802,
                    title: '什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？'
                },
                {
                    questionId: 201803,
                    title: '什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>