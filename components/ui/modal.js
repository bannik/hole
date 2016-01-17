import React from 'react';
import Base from './Base';
import ReactDOM from 'react-dom';


class Modal extends Base {

  constructor(props){
    super(props);
  }

  render(){
    let shown = this.props.shown ? 'modalOpen' : 'modalClose';
    let color = this.props.color ? this.props.color : 'init';
    let classes = ["modal", shown, color];
        classes = classes.join(' ');

    let innerClasses = ["modalInner", color];
        innerClasses = innerClasses.join(' ');

    let onBlur = this.props.onBlur ? this.props.onBlur : null;

    return(
      <div onClick={onBlur} className={classes}>
        <div className={innerClasses}>
          {this.props.children}
        </div>
      </div>
    );

  }
}

export default Modal;
