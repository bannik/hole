
import React from "react";
import ReactDOM from 'react-dom';
import './checkbox.scss';

class CheckBox extends React.Component{
  constructor(props){
    super(props);
  }

  shouldComponentUpdate(next_props, next_state){
    return (this.props.check != next_props.check)
  }

	render(){
    let classes = ["checkBoxWrap", this.props.customClass].join(' ');
    let checked = this.props.checked ? 'checkBox active' : 'checkBox';
    let label = this.props.label ? this.props.label : 'There was no label setted up';

    return(
      <div className={classes} key={this.props.label ? label : Math.random()} onClick={this.props.onClick}>
        <div className={checked}>
          <span></span>
        </div>
        <span className="checkBoxLabel">{label}</span>
      </div>
    );
	}
}

module.exports = CheckBox;
