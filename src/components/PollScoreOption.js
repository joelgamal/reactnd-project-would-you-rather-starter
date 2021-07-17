import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react';


//component no. 10
class PollScoreOption extends Component{

    render(){
        const {text, votes, totalVotes}= this.props
        return(
            <div className='polloption'>
                Would you rather {text}?
                <br></br>
                <Progress 
                    percent={(votes / totalVotes)*100}
                    progress

                />
                {votes} out of {totalVotes}

            </div>
        )
    }



}



export default PollScoreOption