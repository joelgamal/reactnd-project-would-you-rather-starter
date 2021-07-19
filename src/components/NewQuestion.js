import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleCreateQuestion} from '../actions/questions'
import { withRouter } from 'react-router-dom'; 

//component no. 3

class NewQuestion extends Component{

    state ={
        optionOne: '',
        optionTwo: '',
    }

    handleChange = (e) => {
        const option = e.target.name

        if(option === 'optionOneText'){
            this.setState({
                optionOne: e.target.value
              })
            // this.setState({optionOne: e.target.value}, this.handleSubmit)
            // console.log(this.state.optionOne)
        }else{
            this.setState(()=>({
                optionTwo: e.target.value
              }))
            // console.log(this.state.optionTwo)
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        this.props.dispatch(handleCreateQuestion(this.state.optionOne, this.state.optionTwo))

        this.setState(()=>({
            optionOne: '',
            optionTwo: '',
        }))

        this.props.history.push('/home')
    }

    render(){
        return(
            <div>
               <h2 className='center'>Create New Question</h2> 
               <h3 className='center'>Would you rather</h3> 
               <form onSubmit={this.handleSubmit}>
                   <textarea
                    placeholder="Option One"
                    value={this.state.optionOne}
                    onChange={this.handleChange}
                    className='textarea'
                    name='optionOneText'
                    /><br></br>
                    or
                    <br></br>
                    <textarea
                    placeholder="Option Two"
                    value={this.state.optionTwo}
                    onChange={this.handleChange}
                    className='textarea'
                    name = 'optionTwoText'
                    />
                    <br></br>
                    <button
                    className = 'btn'
                    type= 'submit'
                    disabled={this.state.optionOne ===''|| this.state.optionTwo ===''}>
                        Submit
                    </button>
               </form>
            </div>
        )
    }
}

export default withRouter(connect()(NewQuestion))