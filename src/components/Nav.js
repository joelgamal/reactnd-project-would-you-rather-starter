import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

//component no. 1

class Nav extends Component{
    render(){
        const {authedUser, user} = this.props
        return(
            <Fragment>
                <nav className='nav'>
                    <ul>
                        <li>
                        <NavLink to='/home' exact activeClassName='active'>
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Question
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leader Board
                        </NavLink>
                        </li>
                    </ul>
                </nav>
                
                {authedUser && user && `Hello, ${user.name}    `}
                {/* <button>
                    Logout
                </button> */}
                {authedUser &&<NavLink 
                  to='/login'
                >Log out</NavLink>
                }
            </Fragment>
        )
    }

}


function mapStateToProps ({ authedUser, users}) {

    return{
        authedUser,
        user: users[authedUser]? users[authedUser]:null,
    }

}

export default connect(mapStateToProps)(Nav)