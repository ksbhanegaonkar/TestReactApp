import React,{Component} from 'react';
import './TaskBar.css';
import TaskBarItem from './TaskBarItem';


class TaskBar extends Component {
  state={
    taskBarItems:["abc","def","ijk","lmn","abc","def","ijk","lmn","abc","def","ijk","lmn",
    "abc","def","ijk","lmn","abc","def","ijk","lmn","abc","def","ijk","lmn",
    "abc","def","ijk","lmn","abc","def","ijk","lmn","abc","def","ijk","lmn",
    "abc","def","ijk","lmn","abc"]
    
  }

  componentDidMount(){


  }

  renderTaskBarItems(){
    return this.state.taskBarItems.map((item)=>{
      return (
      <div className="col-1">
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
