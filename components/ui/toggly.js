import React from 'react';
import ReactDOM from 'react-dom';
import Base from './Base'
class Toggly extends Base{
  constructor() {
    super();

  }

  render(){
    let customClass = this.props.customClass ? this.props.customClass : null;
    let classes = ["toggly", customClass].join(' ');

    return(
      <div className={classes}>
      </div>
    );

  }

}

export default Toggly;
