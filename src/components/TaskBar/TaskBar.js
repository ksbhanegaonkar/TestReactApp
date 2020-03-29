import React,{Component} from 'react';
import './TaskBar.css';
import TaskBarItem from './TaskBarItem';


class TaskBar extends Component {
  state={
    taskBarItems:["abc","def","ijk","lmn"]
    
  }

  componentDidMount(){


  }

  renderTaskBarItems(){
    return this.state.taskBarItems.map((item)=>{
      return (
      <div className="col-1" key={item}>
          <TaskBarItem name={item}></TaskBarItem>
      </div>
     );
    });
  }

  render(){
  return (
    <div className="container mw-100">
      <div className="row">
      {this.renderTaskBarItems()}
     
      </div>
      
    </div>
  );
  }


}

export default TaskBar;
