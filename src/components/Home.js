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
                    <h2>List of Unanswered</h2>
                    {unansweredIDs.map((id)=>{
                        const user = users[questions[id].author]
                        return(<Poll 
                        avatar={user.avatarURL}
                        name = {user.name}
                        opt= {questions[id].optionOne.text}
                        answered = {false}
                    />)
                    }
                    ) }
                    
                </TabPanel>

                <TabPanel>
                    <h2>List of Answered</h2>
                    {answeredIDs.map((id)=>{
                        const user = users[questions[id].author]
                        return(<Poll 
                        avatar={user.avatarURL}
                        name = {user.name}
                        opt= {questions[id].optionOne.text}
                        answered = {true}
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
    const answeredIDs= Object.keys(users['tylermcginnis'].answers)
    console.log("answeredIDs",answeredIDs)
    const questionsIDs = Object.keys(questions)
    const unansweredIDs= questionsIDs

    for (const aid of answeredIDs) {
        for( var i = 0; i < unansweredIDs.length; i++){ 
        
            if ( unansweredIDs[i] === aid) { 
        
                unansweredIDs.splice(i, 1); 
            }
        
        }
    }

    console.log("unansweredIDs",unansweredIDs)
    



    return{
        users,
        questions,
        answeredIDs,
        unansweredIDs
    }
}

export default connect(mapStateToProps)(Home)