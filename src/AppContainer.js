import React from 'react'
import { searchUsersThunk, getReposThunk, getUserThunk, setLoading } from './redux/usersReducer';
import { connect } from 'react-redux' 
import App from './App';


const AppContainer = (props) => {
  
  const onSubmit = (value) => {
    props.setLoading()
    props.getReposThunk(value)
    props.getUserThunk(value)
    props.searchUsersThunk(value)
  }

  return props.loading
  ? <div className='text-center mt-4'>Loading...</div>
  : <App {...props} onSubmit={onSubmit}/> 

}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    user: state.users.user,
    loading: state.users.loading,
    repos: state.users.repos
  }
}

const mapDispatchToProps = {
  searchUsersThunk,
  getReposThunk,
  getUserThunk,
  setLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)


