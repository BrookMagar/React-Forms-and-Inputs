import React, { Component } from 'react';
import Toggle from './ToggleRenderProps';

class Help extends Component {
  render() {
    return (
      <div>
         <Toggle render={({on, toggle})=>(
          <div>
            <ul class="list-group">
          </ul>
          <li onClick={toggle}class="list-group-item">Question</li>
            {on && <li class="list-group-item answer-item">Answer</li>        
           }
         </div>        
       )} 
       />
        <Toggle render={({on, toggle})=>(
         <div>
           <li onClick={toggle}class="list-group-item">Question 2</li>
            {on && <li class="list-group-item answer-item">Answer 2</li>      
           }     
         </div>  
       )} 
       />
        <Toggle render={({on, toggle})=>(
         <div>
           <li onClick={toggle}class="list-group-item">Question 3</li>
            {on && <li class="list-group-item answer-item">Answer 3</li>
           }
         </div>  
       )} 
       />
      </div>   
    );
  }
}

export default Help;
