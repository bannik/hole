import React from 'react';
import ReactDOM from 'react-dom';
import './tabs.scss';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: props.children[0]
    }
  }
  tabSelect(index){
    let self = this;

    if(index != self.state.activeTab){
      self.setState({active: index});
    }
  }
  render(){
    let self = this;
    let tabNav = [];
    let active = self.state.active;
    if(self.props.children.length){
      self.props.children.forEach(function(child) {
        tabNav.push(<div className={child.props.title === active.props.title ? "tab active" : "tab"} onClick={self.tabSelect.bind(self, child)}>{child}</div>);
        return tabNav;
      });
    }else{
      tabNav.push(<p>You need to add an other tab to your code so this thing could actually make any sence</p>)
    }

    let tabNavClasses = ['tabNav', this.props.customNavClass].join(' ');
    let tabClasses = ['tabs', this.props.orientation, this.props.customClass].join(' ');

    return(
      <div className={tabClasses}>
        <div className={tabNavClasses}>{tabNav}</div>
        <div>{self.state.active.props.children}</div>
      </div>
    )

  }
}

module.exports = Tabs;
