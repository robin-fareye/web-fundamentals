import React, { PureComponent } from 'react'
import { Button, Table } from 'antd'
import 'antd/dist/antd.min.css'
import './UserList.css'
import '../service/TableFieldService'
import AddUserModal from './AddUserModal'
export default class UserList extends PureComponent {
    constructor(){
        super()
        this.state={
            isDrawerOpen:false,
            editMode:false,
            users:[]
        }
    }
    //this array could be placed in some other file
    col=[
          {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
          },
          {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
          },
          {
            title: 'User Type',
            dataIndex: 'userType',
            key: 'userType',
          },
          {
            title:"Action",
            dataIndex:"action",
            key:"action",
            render:(_,record,index)=>{
                return(
             <>
                <Button onClick={()=>this.editUser(record)}>
                    Edit
                </Button>
                <Button onClick={()=>this.removeUser(index)}>
                    Delete
                </Button>
             </>
            )}
          }
    ]

    //creating columns for table dynamically
    columns=this.col.map((item)=>{
        return({
            title:item.title,
            dataIndex:item.dataIndex,
            key:item.key,
            render:item?.render
        })
    })

    removeUser=(index)=>{
        console.log("index: ",index);
        this.setState((prevState)=>({
            users:[...prevState.users].splice(index,1)
        }))
        
    }
    saveUser=(user)=>{
        this.setState((prevState)=>({
            users:[...prevState.users,user]
        }))
        this.onClose()

    }
    ////////////TODO//////////////////
    editUser=(record)=>{
        this.setState({editMode:true})
        this.setState({isDrawerOpen:true})
    }
    ////////////////////////////////
    handleAddClick=()=>{
        this.setState({isDrawerOpen:true})
    }
    onClose=()=>{
        this.setState({isDrawerOpen:false})
    }
  render() {
    return (
      <div className='main-container'>
        <Button onClick={this.handleAddClick} className="add-button">Add User</Button>
        <Table dataSource={this.state.users} columns={this.columns} />
        <AddUserModal 
            isOpen={this.state.isDrawerOpen} 
            onClose={this.onClose} 
            saveUser={this.saveUser} 
            //userData={this.userData} 
            isEditMode={this.state.editMode}  >
        </AddUserModal>
      </div>

    )
  }
}
