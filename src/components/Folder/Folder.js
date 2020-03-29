import React,{Component} from 'react';
import './Folder.css';
import StartMenu from '../StartMenu/StartMenu';
import TaskBar from '../TaskBar/TaskBar';
import TopBar from '../TopBar/TopBar';


class Folder extends Component {
  state={

    
  }

  componentDidMount(){


  }

  render(){
  return (
    <div className="container-fluid mw-100">
        <div className="row no-gutters">
            <div className="col-12">
                <TopBar></TopBar>
            </div>
        </div>

    </div>
  );
  }


}

export default Folder;
