import React from 'react';
import Base from './Base';
import ReactDOM from 'react-dom';


class NavItem extends Base{
    render(){
        let content = [];
        let classes = this.props.customClass ? this.props.customClass + ' navItem' : 'navItem';

        if(this.props.active){
          classes = classes + ' navItemActive'
        }
        // Checking for item image and pushing it into the item
        if(this.props.imgUrl){
          content.push(
            <div key={new Date().getTime()}>
              <img src={this.props.imgUrl} />
              <span>{this.props.itemName}</span>
            </div>
          );
        }else{
          content.push(
            <span key={new Date().getTime()}>{this.props.itemName}</span>
          );
        }

        return (
          <li className={ classes } >
            { content }
          </li>
        );
    }
}

export default NavItem;
