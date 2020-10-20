import React,{component} from 'react'
import {HashRouter,Switch,Router,Redirect} from 'react-router-dom'

import login from '@/Login/index'
export default class routeArr extends component{
    render(){
        return (
            <Switch>
                <route path="/" exact component ={login} />
            </Switch>
        )
            
        
    }
}
    