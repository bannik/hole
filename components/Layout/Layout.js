/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import { Button, CheckBox, Input, Modal, Base, Tabs, Tab } from '../ui';

class Layout extends Base{

  constructor(){
    super();
    this.state = {
      modalTest1: false
    }
  }
  render(){
    let classes = ["Layout", "init"].join(' ');

    let Studies = [
    	{ type: 'item', label: 'Middle'},
    	{ type: 'item', label: 'Top'},
    	{ type: 'item', label: 'Bottom'},
    ];
    return (
      <div className={ classes }>
        <Navigation />
        <h1>Button</h1>
        <Button label="Holla!" type="primary"/>
        <Button label="Holla!" type="secondary"/>
        <Button label="Holla!" type="error"/>
        <Button label="Holla!" type="warning"/>
        <h1>Checkbox</h1>
        <CheckBox label="Type anything" checked={true} customClass="sampleClassCheckbox" />
        <CheckBox label="Type anything" checked={false} customClass="sampleClassCheckbox" />
        <h1>Input</h1>
        <Input placeholder="Type anything" defaultValue="donut" customClass="sampleClassInput" type="text" label="Sample Input" name="sampleInput"/>
        <h1>Modal</h1>
        <Button label="Toggle Modal" onClick={this.toggleModal.bind(this)} type="warning"/>
        <Modal shown={this.state.modalTest1} onBlur={this.toggleModal.bind(this)}>
          ajshdjhd
        </Modal>
        <Tabs>
          <Tab title="tab1">Tab 1 Content</Tab>
          <Tab title="tab2">Tab 2 Content</Tab>
          <Tab title="tab3">Tab 3 Content</Tab>
        </Tabs>
      </div>
    );
  }
  toggleModal(){
    if(this.state.modalTest1){
      this.setState({modalTest1: false});
    }else{
      this.setState({modalTest1: true});
    }
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
