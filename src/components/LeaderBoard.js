import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserScore from './UserScore'

// component no. 4
class LeaderBoard extends Component{
    render(){
        const {users} = this.props
        const usersIDs = Object.keys(users);
        // console.log("usersIDs",usersIDs)

        const sortedUsersID = usersIDs.sort((a,b)=>
        (Object.keys(users[b].answers).length + (users[b].questions).length ) -
        (Object.keys(users[a].answers).length + (users[a].questions).length )
        )
        // console.log("sortedUsersID",sortedUsersID)


        return(
            <div>
                {sortedUsersID.map((id)=>(
                <UserScore 
                avatar={users[id].avatarURL } 
                name={users[id].name } 
                ans={Object.keys(users[id].answers).length} 
                ques={users[id].questions.length}
                key={id}/>
                ))}
            </div>
        )
    }

}

function mapStateToProps ({ users }) {
    return{
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)