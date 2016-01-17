import React from 'react';
import ReactDOM from 'react-dom';
import './input.scss'

class Input extends React.Component{
  constructor(props){
    super(props);
    let defaultValue = props.defaultValue ? props.defaultValue : '';

    this.state = {
      inputValue: defaultValue
    }
  }

  componentWillReceiveProps(next_props){
    if(this.state !== next_props.defaultValue){
      this.setState({inputValue: next_props.defaultValue})
    }
  }
  handleChange(e){
    let value = e.target.value;
    this.setState({
      inputValue: value
    });

    if(this.props.alteredPrice){
      this.props.alteredPrice(value);
    }
  }
  render(){
    // Here we check if on render everything goes right, so nothing wild appears!
    let content = [];
    let classes = ["inputWrap", this.props.customClass ].join(' ');
    let name = this.props.name ? this.props.name : null;
    let type = this.props.type ? this.props.type : 'text';
    let placeholder = this.props.placeholder ? this.props.placeholder : null;

    if(this.props.label){
      content.unshift(<label htmlFor={name}>{this.props.label}</label>)
    }

    return(
      <div className={classes}>
        {content}
        <input type={type} onChange={this.handleChange.bind(this)} value={this.state.inputValue} placeholder={placeholder} name={name} id={name} key={name} />
      </div>
    );
  }

}

module.exports = Input;
