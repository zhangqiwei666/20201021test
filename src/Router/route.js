import Login from '../Login/index'
import Home from '../Page/Home/index'
import User from '../Page/User/index'
import Main from '../Page/User/main'
import Info from '../Page/User/info'

let router = [
    {
        path: '/',//首页默认加载的页面
        componentName: Login,
        exact: true //是否为严格模式
    },
    {
        path: '/Home',
        componentName: Home
    },
    // {
    //     path:'/PersonInformation',
    //     componentName:PersonInformation
    // },
    {
        path: '/user',
        componentName: User,
        routes: [  /** 嵌套路由  User下面又有两个子页面*/
            {
                path: '/user/',
                componentName: Main,
                exact: false
            },
            {
                path: '/user/info',
                componentName: Info
            },
        ]
    }
];   
export default router