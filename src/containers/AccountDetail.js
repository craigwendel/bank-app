import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import {withdrawFunds} from '../actions/index'

class AccountDetail extends Component {

  render () {
    if (!this.props.selectedAccount) {
      return (
        <div>
          Unauthorized. Please return back to the homepage.
        </div>
      )
    }

    const {id} = this.props.match.params
    const {accountID} = this.props.match.params
    const userIdx = this.props.users.findIndex(user => user._id === id)
    const accountIdx = this.props.users[userIdx].accounts.findIndex(account => account.id === parseInt(accountID, 10))
    const selectedAccount = this.props.users[userIdx].accounts[accountIdx]
    const selectedUser = this.props.users[userIdx]

    return (
      <div>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-block'>
              <h4 className='card-title'>Account Information:</h4>
              <h6 className='card-subtitle mb-2 text-muted'>{selectedAccount.accountType} for {selectedUser.name}</h6>
              <div className='card-text'>
                <div>Balance: ${selectedAccount.balance}</div>
                <div className='withdraw-button'>
                  <button type='button' className='btn btn-danger' onClick={() => this.props.withdrawFunds(5)}>Withdraw $5</button>
                </div>
                <div className='withdraw-button'>
                  <button type='button' className='btn btn-danger' onClick={() => this.props.withdrawFunds(10)}>Withdraw $10</button>
                </div>
                <div className='withdraw-button'>
                  <button type='button' className='btn btn-danger' onClick={() => this.props.withdrawFunds(20)}>Withdraw $20</button>
                </div>
              </div>
            </div>
            <Link className='btn btn-primary' to={`/users/${this.props.selectedUser._id}`} >Back to User Details </Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    withdrawFunds: withdrawFunds
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail)
