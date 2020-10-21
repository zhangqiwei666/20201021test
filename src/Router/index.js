import React,{Component} from 'react'
import {HashRouter,Route} from 'react-router-dom'
import router from './route'

class RouterComponent extends Component {
    render(){
        return (
            <HashRouter>
              { 
              router.map(({path, componentName, exact=true, routes = []},key) =>{
                  return <Route 
                            exact = {exact}
                            key = {key}
                            path = {path}
                            component={componentName}
                            // render = {props => (
                            //     //主要是为了传递嵌套路由到子组件 
                            //     //类似于 <User {...props} routes={routes} />
                            //     <componentName {...props} routes={routes} />
                            // )}
                            />
              })
              }
            </HashRouter>
        )
    }
}
export default RouterComponent