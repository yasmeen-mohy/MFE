import React from "react";
import ReactDom from "react-dom";
import {createMemoryHistory,createBrowserHistory} from 'history'
import App from "./App";
const mount = (el,{onNavigat,defaultHistory, initialPath}) =>{
    const history=defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });
    if(onNavigat){
// here we are handlimg the scenario where we want to send info from the marketing to the container , the idea is there is a function on container project which sync the history object this function called "onNavigate" we receive it from the mount function and if it exists we call it to send it the current path in the history of the marketing app 
        history.listen(onNavigat);
    }
    ReactDom.render(<App history={history}/>,el);
    return {
 //  here we are handling the sceenario weher we want to send info from the container to the marketing the only way is to send function as a return from the mount which will be exiswt only im container when it calls mount to load marketing app so assuming that function called in "history.listen" call that will send a location object which will have the path of the container so we just check if there is different and set the marketing path to the same as container path 
        onParentNavigate({pathname:nextpathName}){
            const {pathname}=history.location
            if(pathname !== nextpathName){
                history.push(nextpathName);
            }
        }
    }
};

// as a summary when you  want to sync the path of container to be the same as marketing (the marketing is tha changed one ) create the function on conatiner and use it in marketing 
// when the changed one is the container path and you want to sync it with marketing path create the function in the marketing 
if(process.env.NODE_ENV === 'development'){
    const devRoot= document.querySelector('#auth-dev-root');
    if(devRoot){
        mount(devRoot,{defaultHistory:createBrowserHistory()});
    }
}

export {mount};