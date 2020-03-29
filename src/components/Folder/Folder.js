import React,{Component} from 'react';
import './Folder.css';
import StartMenu from '../StartMenu/StartMenu';
import TaskBar from '../TaskBar/TaskBar';
import TopBar from '../TopBar/TopBar';
import FolderItem from './FolderItem';


class Folder extends Component {
  state={

    folderContaints:["abc","def","ijk","lmn"]
  }

  componentDidMount(){




  }

  renderFolderContent(){
     return this.state.folderContaints.map(c =>{
        return (<div key={c} className="col-1"><FolderItem name={c}></FolderItem></div>);
      })
  }

  render(){
  return (

            <div className="col-12">
        

                  <TopBar></TopBar>

                <div className="row m-3">
                {this.renderFolderContent()}
       
              </div>


            </div>

  );
  }


}

export default Folder;
