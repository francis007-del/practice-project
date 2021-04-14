import React from 'react';
import './face.css'
const Face=({url,box})=>{
    return(
        <div style={{display:'flex',flexDirection:'column',position:'relative'}}>
            <img id='image' className='br3' alt='' src={url} style={{marginTop:'2px'}}/>
<div className='bounding-box' style={{top:box.toprow,right:box.rightcol,bottom:box.bottomrow,left:box.leftcol}}></div>
           
        </div>
    );
}
export default Face;
