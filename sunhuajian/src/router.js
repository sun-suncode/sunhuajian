import Vue from 'vue';
import Router from 'vue-router';

//组件模块
// 主路由
import TeacherPage from './components/teacherpage/TeacherPage.vue';


// 登陆模块主路由
import Login from './components/teacherpage/login/Login.vue';

import ByPhonelogin from './components/teacherpage/login/ByPhoneLogin.vue';
import ByPhoneSign from './components/teacherpage/login/ByPhoneLoginSign.vue';
import LoginForm from './components/teacherpage/login/LoginForm.vue';
// mycenter页面路由
import Mycenter from './components/teacherpage/mycenter/MyCenter.vue';

// 基本信息页面路由
// 主路由
import BasicInfo from './components/teacherpage/basicInfo/BasicInfo.vue';
// 子路由
import MyInfo from './components/teacherpage/basicInfo/MyInfo.vue'
import PasswordManager from './components/teacherpage/basicInfo/PasswordManager.vue';
import AuthInfo from './components/teacherpage/basicInfo/AuthInfo.vue'

import No from './components/teacherpage/basicInfo/Def.vue'
// 课程管理页面路由
// 主路由
import CourseManagement from './components/teacherpage/coursemanagement/CourseManagement.vue';

import MyCourse from './components/teacherpage/coursemanagement/MyCourse.vue'
import NoCourse from './components/teacherpage/coursemanagement/NoCourse.vue'
import UpCourse from './components/teacherpage/coursemanagement/UpCourse.vue'
import WriteCourse from './components/teacherpage/coursemanagement/WriteCourse.vue'

import MyActivity from './components/teacherpage/coursemanagement/MyActivity.vue'
import HavePublished from './components/teacherpage/coursemanagement/HavePublished.vue'
import Audit from './components/teacherpage/coursemanagement/Audit.vue'
import NoPass from './components/teacherpage/coursemanagement/NoPass.vue'


// 我的问答页面路由
// 主路由
import MyQuestion from './components/teacherpage/MyQuestionPage/MyQuestion.vue';
// 子路由
import MyQues from './components/teacherpage/myquestion/MyQues.vue'
import MyAnswer from './components/teacherpage/myquestion/MyAnswer.vue'


Vue.use(Router);



/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

export default new Router({
    mode: "history",
    routes: [{
        path: '',
        name: 'login',
        component: Login,
        children: [{
            path: '',
            name: 'LoginForm',
            component: LoginForm
        },
        {
            path: '/ByPhonelogin',
            name: 'ByPhonelogin',
            component: ByPhonelogin
        },
        {
            path: '/ByPhoneSign',
            name: 'ByPhoneSign',
            component: ByPhoneSign
        }
        ]
    },
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/Login',
        name: 'login',
        component: Login,
        children: [{
            path: '',
            name: 'LoginForm',
            component: LoginForm
        },
        {
            path: '/ByPhonelogin',
            name: 'ByPhonelogin',
            component: ByPhonelogin
        },
        {
            path: '/ByPhoneSign',
            name: 'ByPhoneSign',
            component: ByPhoneSign
        }
        ]
    },
    {
        path: 'TeacherPage',
        name: "TeacherPage",
        component: TeacherPage,
        children: [{
            path: '/Mycenter',
            name: 'Mycenter',
            component: Mycenter
        },
        {
            path: '/BasicInfo',
            name: 'basic_info',
            component: BasicInfo,
            children: [{
                path: '/MyInfo',
                name: 'MyInfo',
                component: MyInfo
            },
            {
                path: '',
                name: 'MyInfo',
                component: MyInfo
            },
            {
                path: '/PasswordManager',
                name: 'PasswordManager',
                component: PasswordManager
            },
            {
                path: '/AuthInfo',
                name: 'AuthInfo',
                component: AuthInfo,
                children: [{
                    path: '',
                    name: 'No',
                    component: No,
                },
                {
                    path: '/No',
                    name: 'No',
                    component: No
                }
                ]
            }
            ]
        },
        {
            path: '/CourseManagement',
            name: 'CourseManagement',
            component: CourseManagement,
            children: [
                {
                    path: "", name: "MyCourse", component: MyCourse,
                    children: [
                        {
                            path: '',
                            name: 'NoCourse',
                            component: NoCourse
                        },
                        {
                            path: 'NoCourse',
                            name: 'NoCourse',
                            component: NoCourse
                        },
                        {
                            path: '/UpCourse',
                            name: 'UpCourse',
                            component: UpCourse
                        },
                        {
                            path: '/WriteCourse',
                            name: 'WriteCourse',
                            component: WriteCourse
                        },
                    ]
                },
                {
                    path: "/MyCourse", name: "MyCourse", component: MyCourse,
                    children: [
                        {
                            path: '',
                            name: 'NoCourse',
                            component: NoCourse
                        },
                        {
                            path: 'NoCourse',
                            name: 'NoCourse',
                            component: NoCourse
                        },
                        {
                            path: '/UpCourse',
                            name: 'UpCourse',
                            component: UpCourse
                        },
                        {
                            path: '/WriteCourse',
                            name: 'WriteCourse',
                            component: WriteCourse
                        },
                    ]
                },
                {
                    path: "/MyActivity", name: "MyActivity", component: MyActivity,
                    children: [
                        {
                            path: '',
                            name: 'HavePublished',
                            component: HavePublished
                        },
                        {
                            path: '/HavePublished',
                            name: 'HavePublished',
                            component: HavePublished
                        },
                        {
                            path: '/Audit',
                            name: 'Audit',
                            component: Audit
                        },
                        {
                            path: '/NoPass',
                            name: 'NoPass',
                            component: NoPass
                        },
                    ]
                }
            ]
        },
        {
            path: '/MyQuestion',
            name: 'MyQuestion',
            component: MyQuestion,
            children: [{
                path: '',
                name: 'MyQues',
                component: MyQues
            },
            {
                path: '/MyQues',
                name: 'MyQues',
                component: MyQues
            },
            {
                path: '/MyAnswer',
                name: 'MyAnswer',
                component: MyAnswer
            }
            ]
        }
        ]
    }
    ]
})