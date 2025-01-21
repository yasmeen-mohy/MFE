import React from "react";
import ReactDom from "react-dom";
import {createMemoryHistory} from 'history'
import App from "./App";
const mount = (el,{onNavigat}) =>{
    const history=createMemoryHistory();
    if(onNavigat){

        history.listen(onNavigat);
    }
    ReactDom.render(<App history={history}/>,el);
    return {
        onParentNavigate({pathname:nextpathName}){
            const {pathname}=history.location
            if(pathname !== nextpathName){
                history.push(nextpathName);
            }
        }
    }
};


if(process.env.NODE_ENV === 'development'){
    const devRoot= document.querySelector('#marketing-dev-root');
    if(devRoot){
        mount(devRoot,{});
    }
}

export {mount};