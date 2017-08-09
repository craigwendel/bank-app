import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render () {
    return (
      <div className='base-layout'>
        <nav className="navbar navbar-toggleable-md navbar navbar-inverse bg-primary">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand" exact to='/'>Bank Shot</NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to='/' className="nav-link" activeClassName='selected'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/users' className="nav-link" activeClassName='selected'>Users</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {this.props.children}

      </div>
    )
  }
}
