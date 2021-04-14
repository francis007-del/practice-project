import React from 'react';
import './searchbar.css'
const Searchbar=({inpchange,onbtnclk})=>{
    return(
        <div style={{display:'flex'}}>
<input type='searchbar' placeholder='ENTER URL' className='br3 pad3' onChange={inpchange} style={{flexBasis:'0px',flexGrow:'1'}}></input>

<button className='pa3 br3 pointer' onClick={onbtnclk}>DETECT</button>
       </div>
    );
}
export default Searchbar;