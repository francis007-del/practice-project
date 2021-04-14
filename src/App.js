import React from 'react';
import Logo from './components/logo/logo';
import Searchbar from './components/searchbar/searchbar';
import './App.css';
import Face from './components/face/face'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Register from './components/register/register'
const app = new Clarifai.App({
  apiKey: 'dbe7f57e47d64221ba1e86f2c712aef0'
 });
class App extends React.Component{
  constructor(){
    super();
    this.state={
    input:'',
    imageurl:'',
    box:'',
    page:'register'
    }
  }
  boxdetails=(data)=>{
   const details=data.outputs[0].data.regions[0].region_info.bounding_box;
   const width=Number(document.getElementById('image').width);
   const height=Number(document.getElementById('image').height);
   console.log(width,height);
   return{
     leftcol:details.left_col*width,
     rightcol:width-details.right_col*width,
     toprow:details.top_row*height,
     bottomrow:height-details.bottom_row*height
   }
  }
  setbox=(data)=>{
    this.setState({box:data});
    console.log(this.state.box);
  }
  changepage=()=>{
   this.setState({page:'main'});
  }
  changepagereg=()=>{
    this.setState({page:'register',input:'',imageurl:'',box:''})
  }
  inpchange=(event)=>{
    this.setState({input:event.target.value});
    }
  onbtnclk=()=>{
this.setState({imageurl:this.state.input});
console.log(this.state.input);
app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
.then((response)=>this.setbox(this.boxdetails(response)));}
  render(){
  return (
    <div>
      <Particles className='particles'
              params={{
            		particles: {
                  number:{
                    value:200,
                  }
            		}
            	}}
            />
      <Logo change={this.changepagereg}/>
     
      {this.state.page==='register'?<Register changepage={this.changepage}/>:
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
        <div style={{gridColumnStart:'2',gridColumnEnd:'3'}}>
    <div style={{display:'flex',flexDirection:'column'}}>
        
      <div style={{paddingLeft:'10px'}}>
    <p style={{fontStyle:'oblique',fontSize:'2em',marginBottom:'5px'}} className='grow shadow3'>FACE DETECT APP :)</p>
    </div>
    <div style={{paddingRight:'30%'}}>
    <div style={{border:'1px solid black',marginBottom:'5px'}}></div>
    </div>
    <div className='pa4 dib shadow-4 br3 custom'>
      <Searchbar inpchange={this.inpchange} onbtnclk={this.onbtnclk} className='grow'/>
     </div>
      <Face box={this.state.box} url={this.state.imageurl}/>
     </div>
     </div>
     </div>}
     
    </div>
  );
}
}

export default App;
