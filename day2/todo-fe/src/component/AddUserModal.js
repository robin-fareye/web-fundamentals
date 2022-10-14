import { Drawer,Button,Space ,Input,Typography,Radio} from 'antd'
import React, { PureComponent } from 'react'


export default class AddUserModal extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            userType:""
        }
    }

    handleClose=()=>{
        this.setState({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            userType:""
        })
        this.props.onClose()
    }
    
    handleOnChange=(event)=>{
        const {name,value}=event?.target
        this.setState({[name]:value})
    }

    onSave=()=>{

        this.props.saveUser(this.state)
        this.setState({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            userType:""
        })
    }

  render() {
    return (
      <Drawer
       open={this.props.isOpen}
       onClose={this.handleClose}
       size="large"
       extra={
        <Space>
          <Button onClick={this.handleClose}>Cancel</Button>
          <Button onClick={this.onSave} type="primary">Submit</Button>
        </Space>
      }
      >
        <div className="input-field">
        <Typography className='label'>First Name: </Typography>
        <Input 
            name='firstName'
            value={this.state.firstName} 
            onChange={(e)=>{this.handleOnChange(e)}}
            placeholder="Type here" />
        </div>

        <div className="input-field">
        <Typography className='label' >Last Name: </Typography>
        <Input 
            name='lastName'
            value={this.state.lastName} 
            onChange={(e)=>{this.handleOnChange(e)}}
            placeholder="Type here" />
        </div>

        <div className="input-field">
        <Typography className='label' >Email: </Typography>
        <Input 
            name='email'
            value={this.state.email} 
            onChange={(e)=>{this.handleOnChange(e)}}
            placeholder="Type here" />
        </div>

        <div className="input-field">
        <Typography className='label' >Password: </Typography>
        <Input.Password
            name='password'
            value={this.state.password} 
            onChange={(e)=>{this.handleOnChange(e)}}
            placeholder="Type here" />
        </div>
        <div className='input-field'>
        <Typography className='label' >User Type: </Typography>
            <Radio.Group onChange={(e)=>{this.handleOnChange(e)}} value={this.state.userType} name='userType'>
                <Radio value="admin">Admin</Radio>
                <Radio value="user">User</Radio>
            </Radio.Group>
        </div>

      </Drawer>
    )
  }
}
