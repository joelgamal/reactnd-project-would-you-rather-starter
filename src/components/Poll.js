import React, { Component } from 'react'
import {Link } from 'react-router-dom'



// component no. 8
class Poll extends Component{
    render(){
        const{avatar, name, opt, answered, id} = this.props
        return(
            <div>
                <div>
                    {name} asks:
                </div>
                <div>
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />
                    
                </div>
                <div>
                    <h4>Would you rather</h4>
                    ...{opt}...
                    <br></br>
                    {/* <button >View Poll</button> */}

                    {answered &&<Link to={`/polls/${id}`} >
                        View Poll
                    </Link>}

                    {!answered &&<Link to={`/questions/${id}`} >
                        View Poll
                    </Link>}
                    <br></br>
                    <br></br>
                    
                </div>
            </div>
        )
    }
}




export default Poll