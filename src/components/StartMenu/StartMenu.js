import React,{Component} from 'react';
import './StartMenu.css';


class StartMenu extends Component {
  state={

    
  }

  componentDidMount(){


  }

onStartButtonClick = (e)=>console.log("Start menu clicked...");
  render(){
  return (
    <div>

                <div className="start-button" onClick={this.onStartButtonClick}> Start </div>
               
    </div>
  );
  }


}

export default StartMenu;
