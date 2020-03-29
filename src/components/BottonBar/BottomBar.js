import React,{Component} from 'react';
import './BottomBar.css';
import StartMenu from '../StartMenu/StartMenu';
import TaskBar from '../TaskBar/TaskBar';


class BottomBar extends Component {
  state={

    
  }

  componentDidMount(){


  }

onStartButtonClick = (e)=>console.log("Start menu clicked...");
  render(){
  return (
    <div>
        <div className="container mw-100 my-container-bottom-bar">
              <div className="row h-100 my-row">
                <div className="col-1 my-column"><StartMenu></StartMenu></div>
                <div className="col-11 my-column"><TaskBar></TaskBar></div>
              </div>
        </div>
    </div>
  );
  }


}

export default BottomBar;
