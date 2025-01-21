import {mount} from 'marketing/MarketingApp'
import React,{useEffect,useRef} from 'react'
import {useHistory} from 'react-router-dom'
export default ()=>{

const ref= useRef(null);
const history=useHistory();

useEffect(()=>{
   const {onParentNavigate}= mount(ref.current,
        {onNavigat:({pathname:nextpathName})=>{
            const {pathname}=history.location;
            if(pathname !== nextpathName){
                history.push(nextpathName);
            }   
        }});
        history.listen(onParentNavigate)
},[])
return <div ref={ref}>
    
</div>
}