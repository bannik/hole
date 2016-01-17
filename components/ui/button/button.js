import React from 'react';
import ReactDOM from 'react-dom';
import './button.scss';


class Button extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let type = this.props.type ? this.props.type : 'init';
    let label = this.props.label ? this.props.label : null;
    let icon = this.props.icon ? ["fa", this.props.icon].join(' ') : null;
    let disabled = this.props.disabled ? "disabled" : null;
    let onClick = this.props.onClick ? this.props.onClick : null;

    let classes = ['butn', type, this.props.customClass];
        classes = classes.join(' ');

    return(
      <button className={ classes } disabled={ disabled } onClick={ onClick }>
        { icon ?
          (
          <span>
            <i className={ icon }></i>
            { label }
          </span>
          ) :
          label
        }
      </button>
    )
  }
}

module.exports = Button;
