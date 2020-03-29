import React,{Component} from 'react';
import './FolderItem.css';
import StartMenu from '../StartMenu/StartMenu';
import TaskBar from '../TaskBar/TaskBar';
import TopBar from '../TopBar/TopBar';


class FolderItem extends Component {
  state={

    
  }

  componentDidMount(){


  }

  render(){
  return (
        <div className="folder-item">{this.props.name}</div>
  );
  }


}

export default FolderItem;
