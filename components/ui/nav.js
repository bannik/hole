import React from 'react';
import Base from './Base';
import ReactDOM from 'react-dom';


class Nav extends Base{
    render(){
        let customClass = this.props.customClass ? this.props.customClass : null;
        let classes = ["nav", customClass];

        return (
          <ul className={ classes } >
            {this.props.children}
          </ul>
        );
    }
}

export default Nav;
