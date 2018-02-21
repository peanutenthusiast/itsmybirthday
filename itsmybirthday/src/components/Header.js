import React, {Component} from 'react';

export default class Header extends Component {

  render() {
    return(
      <nav>
        <div className = "nav-wrapper">
          <a className="left brand-logo">
            #ItsMyBirthday
          </a>
          <ul className="right">
            <li>
              <a>You're in this city</a>
            </li>
          </ul>
        </div>
      </nav> 
    )
  }
}

