import {mount} from 'auth/AuthApp'
import React,{useEffect,useRef} from 'react'
import {useHistory} from 'react-router-dom'
export default ({onSignIn})=>{

const ref= useRef(null);
const history=useHistory();

useEffect(()=>{
   const {onParentNavigate}= mount(ref.current,
        {
             initialPath:history.location.pathname,
             onSignIn ,
            onNavigat:({pathname:nextpathName})=>{
            const {pathname}=history.location;
            if(pathname !== nextpathName){
                history.push(nextpathName);
            }   
        }}, 
        
        );
        history.listen(onParentNavigate)
},[])
return <div ref={ref}>
    
</div>
}