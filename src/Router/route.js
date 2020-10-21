import Login from 'src/Login/index'
import Home from 'src/Page/Home/index'
import User from 'src/Page/User/index'
import Main from 'src/Page/User/main'
import Info from 'src/Page/User/info'

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