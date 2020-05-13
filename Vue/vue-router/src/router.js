import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Community from './views/Community.vue'
// import Student from './views/Student.vue'
// import Learn from './views/Learn.vue'
// import About from './views/About.vue'

// import Academic from './components/community/Academic.vue'
// import Download from './components/community/Download.vue'
// import Personal from './components/community/Personal.vue'

// import Question from './components/Question.vue'

// import Err from './components/Error.vue'

const Home = () => import('./views/Home')//按需加载
const Community = () => import('./views/Community.vue')
const Student = () => import('./views/Student.vue')
const Learn = () => import('./views/Learn.vue')
const About = () => import('./views/About.vue')
const Academic = () => import('./components/community/Academic.vue')
const Download = () => import('./components/community/Download.vue')
const Personal = () => import('./components/community/Personal.vue')
const Question = () => import('./components/Question.vue')
const Err = () => import('./components/Error.vue')
const ChangeCourse = () => import('./components/ChangeCourse.vue')

Vue.use(Router) //使用路由
// export default
const router = new Router({
  mode: 'history', //router有两种模式，history和hash，影响路径history模式添加后不会有/#
  base: process.env.BASE_URL,//
  linkActiveClass: 'active',//起别名
  linkExactActiveClass: 'exact',//起别名
  routes: [{
      path: '/home',
      name: 'home',
      //alias: '/home',路由别名可以和path不同，两个路径都能够访问此界面
      components: { //使用多个路由
        default: Home,
        // 'academic': Academic
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn

    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      redirect: '/community/academic', //重定向路由,
      meta: { //路由原信息，自定义的属性，只能父子之间相互寻找
        login: false
      },
      children: [{
          path: 'academic', //前面不要加"/"
          name: 'academic',
          component: Academic
          //路由独享守卫
          // beforeEnter (to, from, next) {
          //   const answer = confirm('你还没有登录，要登录后才能浏览信息，要登陆吗?');
          //   if (answer) {
          //     next({name: 'personal'})
          //   } else {
          //     next(false)
          //   }
          // }
        },
        {
          path: 'download',
          name: 'download',
          component: Download
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        }

      ]
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/question/:id',
      name: 'question',
      component: Question
    },
    {
      path: '/err.html',
      name: 'err',
      component: Err
    },
    {
      path: '*', //*表示没有配置的所有路径
      //redirect: '/home' //只要输入的路径没有配置都会跳转到home页面
      redirect(to) {
        if (to.path == '/') {
          return '/home'
        } else {
          return {
            name: 'err'
          }
        }
      }
    },
    {
      path: '/learn/changeCourse',
      name: 'changeCourse',
      component: ChangeCourse
    }
  ]
})

//导航守卫
//全局守卫
// router.beforeEach((to,from,next)=>{
//   //to:到哪里去 from：从哪里来
//   console.log(to);
//   console.log(from);
//   next(false);
// })


export default router;