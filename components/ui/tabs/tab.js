import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends React.Component {
  constructor(props){
    super(props);
  }
  render(){

    return (
      <span key={this.props.title}>
        {this.props.title? this.props.title : 'godmaas'}
      </span>
    );
  }
}

export default Tab;
