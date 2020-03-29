import React,{Component} from 'react';
import './TaskBarItem.css';


class TaskBarItem extends Component {
  state={

    
  }

  componentDidMount(){


  }


  render(){
  return (
    <div className="task-bar-item-inactive">
        {this.props.name}
    </div>
  );
  }


}

export default TaskBarItem;
