/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import { Button, CheckBox, Input } from '../ui';

function Layout({ children }) {
  let classes = ["Layout", "init"].join(' ');

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
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
