import React,{component} from 'react'
import {HashRouter,Switch,Router,Redirect} from 'react-router-dom'

import routerArr from './route'

class Router extends Component {
    render(){
        return (
            <HashRouter>
               <routerArr ></routerArr>
            </HashRouter>
        )
    }
}