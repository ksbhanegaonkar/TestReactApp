import React,{Component} from 'react';
import './TopBar.css';
import StartMenu from '../StartMenu/StartMenu';
import TaskBar from '../TaskBar/TaskBar';


class TopBar extends Component {
  state={

    
  }

  componentDidMount(){


  }

  render(){
  return (
    <div className="container-fluid mw-100 container-top-bar">
        <div className="row no-gutters">
            <div className="col-10 app-name my-col">Folder name</div>
            <div className="col-2 action-button my-col">
                <div className="float-right">
                    <button>-</button>
                    <button>X</button>
                </div>
            </div>
            
        </div>

    </div>
  );
  }


}

export default TopBar;
