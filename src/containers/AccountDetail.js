import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import {selectAccount} from '../actions/index'

class AccountDetail extends Component {
  render () {
    return (
      <div className='account-detail'>
        <h4>Account Detail</h4>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount);
  return {
    account: state.users[userIdx].accounts[accountIdx],
    user: state.users[userIdx]
  };
}

export default connect(mapStateToProps)(AccountDetail)
