import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//component no. 5
class LogIn extends Component{
    state={
        value: '',
    }


    onSelect = (e)=>{
        console.log(e.value)
        this.setState(()=>({
            value: e.value
          }))

    }

    handleSubmit = (e) =>{
        e.preventDefault()

        this.props.dispatch(setAuthedUser(this.state.value))

        this.setState(()=>({
            value: '',
        }))

        this.props.history.push('/home')

    }

    render(){
        const {users} = this.props
        const usersIDs = Object.keys(users);
        // console.log(usersIDs)
        // console.log(users[usersIDs[0]].name);

        const options = usersIDs.map((id)=> (
            {value: id,
            label:users[id].name }))
        // const options = ['one', 'two'];
        // console.log(options)

        return(
            <div>
                <h3 className='center'>Sign In</h3>
                <form onSubmit={this.handleSubmit}>

                    <Dropdown 
                    options={options} 
                    onChange={this.onSelect} 
                    placeholder="Select an option" />

                    <button
                    className = 'btn'
                    type= 'submit'
                    disabled={this.state.value === ''}
                    >
                        Sign In
                    </button>

                </form>
 
            </div>

        )
    }
}

function mapStateToProps ({ users }) {
    return{
        users
    }
}

export default connect(mapStateToProps)(LogIn)