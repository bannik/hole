import React from 'react';
import Base from './Base';
import ReactDOM from 'react-dom';


class Textarea extends Base{

  constructor(props){
    super(props);

    this.state = {
      value: props.value ? props.value : null,
      openSets: false
    }
  }

  _onChange(e){
    let value = e.target.value;

    this.setState({
      value: value
    });
    if(this.props.alteredPrice){
      this.props.alteredPrice(value);
    }
  }

  render(){
    let classes = ['textarea', this.props.customClass];
        classes = classes.join(' ');

    let placeholder = this.props.placeholder ? this.props.placeholder : null;

    return(
      <div className={classes}>
        <textarea onChange={this.onChange} placeholder={placeholder} value={this.state.value}></textarea>
      </div>
    )
  }
}

module.exports = Textarea;
