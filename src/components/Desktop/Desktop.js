import React,{Component} from 'react';
import './Desktop.css';
import TaskBar from '../TaskBar/TaskBar';
import BottomBar from '../BottonBar/BottomBar';
import Folder from '../Folder/Folder';


class Desktop extends Component {
  state={

    
  }

  componentDidMount(){


  }


  render(){
  return (
    <div>
        <div className="container-fluid mw-100 my-container">
              <div className="row h-100 my-row no-gutters">
                  <Folder></Folder>
              </div>
              <div className="row">
              <BottomBar></BottomBar>
              </div>
        </div>
        
    </div>
  );
  }


}

export default Desktop;
