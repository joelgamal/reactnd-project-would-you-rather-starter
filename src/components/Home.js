import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// component no. 2
class Home extends Component{
    render(){
        const {users, questions, answeredIDs, unansweredIDs}=this.props

        return(
            <Tabs>
                <TabList>
                    <Tab>Unanswered Questions</Tab>
                    <Tab>Answered Questions</Tab>
                </TabList>

                <TabPanel>
                    {unansweredIDs.map((id)=>{
                        const user = users[questions[id].author]
                        return(<Poll 
                        avatar={user.avatarURL}
                        name = {user.name}
                        opt= {questions[id].optionOne.text}
                        answered = {false}
                        id = {id}
                        key = {id}
                    />)
                    }
                    ) }
                    
                </TabPanel>

                <TabPanel>
                    {Object.keys(questions).length !== 0  && answeredIDs.map((id)=>{
                        const user = users[questions[id].author]
                        return(<Poll 
                        avatar={user.avatarURL}
                        name = {user.name}
                        opt= {questions[id].optionOne.text}
                        answered = {true}
                        id = {id}
                        key = {id}
                    />)
                    }
                    ) }
                </TabPanel>

            </Tabs>
        )
    }
}




function mapStateToProps ({ authedUser, questions,users }) {
    //todo; change 'tylermcginnis' to authedUser
    const ansIDs= Object.keys(users).length !== 0? Object.keys(users[authedUser].answers): []
    // console.log("answeredIDs",answeredIDs)
    const answeredIDs = ansIDs.sort((a,b,) => questions[b].timestamp - questions[a].timestamp)
    const questionsIDs = Object.keys(questions)
    const unansIDs= questionsIDs

    for (const aid of answeredIDs) {
        for( var i = 0; i < unansIDs.length; i++){  
            if ( unansIDs[i] === aid) { 
                unansIDs.splice(i, 1); 
            }
        }
    }
    // console.log("unansweredIDs",unansweredIDs)
    const unansweredIDs = unansIDs.sort((a,b,) => questions[b].timestamp - questions[a].timestamp)

    return{
        users,
        questions,
        answeredIDs,
        unansweredIDs
    }
}

export default connect(mapStateToProps)(Home)