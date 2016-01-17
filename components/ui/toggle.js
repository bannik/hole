import React from 'react';
import Base from './Base';
import ReactDOM from 'react-dom';


class Toggle extends Base{

  render(){

    let classes = this.props.customClass ?  this.props.customClass + ' toggle' : 'toggle';
    let ttlclass = this.props.customTtlClass ? this.props.customTtlClass + ' togglTtl' : 'togglTtl';
    let childClass = this.props.customChild ? this.props.customChild + ' childClass' : 'childClass';
    let title = [];
    if(this.props.active && this.props.active === this.props.title){
      classes = classes + ' activeToggl';
    }
    if(this.props.icon){
      title.push(
        <div key={new Date().getTime()} onClick={this.props.onClick} className={ttlclass}>
          <i className={"fa " + this.props.icon}></i><span>{this.props.title}</span>
        </div>
      );
    }else{
      title.push(
        <div key={new Date().getTime()} onClick={this.props.onClick} className={ttlclass}>
          {this.props.title}
        </div>
      );
    }
    return(
      <div className={classes}>
        {title}
        <div className={childClass}>
          {this.props.active ? this.props.children : null /* don't do nothing, you silly */ }
        </div>
      </div>
    );

  }

}

export default Toggle;
