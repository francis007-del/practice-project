import React from 'react';
import brain from './brain.jpg'
const Logo=({change})=>{
    return(
        <div className='pa2' style={{display:'flex',justifyContent:'space-between'}}>
        <img alt='' src={brain} width='150px' className='pa2 shadow-3 pointer grow'/>
        <input onClick={change} class="bg-transparent b--transparent f2 pv2 ph3 ba dib br3 ma2 shadow-4 grow" type="submit" value="Sign Out" />
   </div>
    );
}
export default Logo;