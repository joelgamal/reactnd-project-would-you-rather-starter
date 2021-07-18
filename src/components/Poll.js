import React, { Component } from 'react'


// component no. 8
class Poll extends Component{
    render(){
        const{avatar, name, opt, answered} = this.props
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
                    <h2>Would you rather</h2>
                    ...{opt}...
                    <br></br>
                    <button >View Poll</button>
                    
                </div>
            </div>
        )
    }
}




export default Poll