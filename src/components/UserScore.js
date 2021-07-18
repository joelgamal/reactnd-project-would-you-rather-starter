import React, { Component } from 'react'

// component no. 9
class UserScore extends Component{
    render(){
        const{avatar, name, ans, ques}=this.props
        return(
            <div>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div>
                    {name}
                    <br></br>
                    Answered Questions {ans}
                    <br></br>
                    Created Questions {ques}
                    <br></br>
                </div>
                <div>
                    Score
                    <br></br>
                    {ans+ques}
                </div>

            </div>
        )
    }

}



export default UserScore