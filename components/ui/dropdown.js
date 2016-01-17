import React from 'react';
import Base from './Base';
import ReactDOM from 'react-dom';


class Dropdown extends Base{

  constructor(props){
    super(props);

    let selectedItem = props.selectedItem ? props.selectedItem : null;

    self.state = {
      active: false,
      items: [],
      selectedItem: selectedItem,
      hcontent: {}
    };
  }

  // Toggle functionality of the dropdown menu
  _handleDropToggle(){
    if(this.state.active){
      this.setState({
        active: false
      });
    }else {
      this.setState({
        active: true
      });
    }
  }

  // Handles sending the data of the selected menu item back to
  // parent component
  _handleClick(data){
    if(self.props.onSelect){
      this.props.onSelect(data);
    }
  }

  componentWillMount(){
    let onClick;

    for (var i = 0; i < this.props.items.length; i++) {

      // Setting onClick for each item of the menu
      if(this.props.items[i].exData){
        onClick = this.onClick(this.props.items[i].exData);
      }else{
        onClick = this.onClick(this.props.items[i].label);
      }

      // Checks if you have setted an image and a holder in your array
      // and sets them as header
      if(this.props.items[i].type === 'image' && !this.state.hcontent.image){
        this.setState({
          hcontent:{
            image: this.props.items[i].src
          }
        });
      }if(this.props.items[i].type === 'holder' && !this.state.hcontent.holder) {
        this.setState({
          hcontent:{
            holder: this.props.items[i].label
          }
        });
      }
      // Here We take all the items of the
      if(this.props.items[i].type === 'item' && this.props.items[i].label != this.state.selectedItem){
        this.state.items.push(<li onClick={onClick} key={i}>{this.props.items[i].label}</li>);
      }
    }
  }

  componentDidMount(){
    if(!this.state.selectedItem && !this.state.hcontent.image && !this.state.hcontent.holder){
      this.setState({
        selectedItem: this.state.items[0].props.children
      });
    }
  }
  render(){
    let self = this;
    let hcontent = {};
    let items = [];
    let holder = [];
    let styles = self.props.styles ? self.props.styles : {};
    let onClick;
    let menuClass = ['dropContent', self.props.className];
    let arrowClass = this.state.active ? 'fa fa-angle-up' : 'fa fa-angle-down';

    if(self.state.active){
      menuClass.push('dropActive');
    }

    menuClass = menuClass.join(' ');

    for (var i = 0; i < this.state.items.length; i++) {
      if(this.state.items[i].props.children != this.state.selectedItem){
        items.push(this.state.items[i]);
      }
    }

    // Here we check if there was something in our array to add to header of
    // the menu
    if(!this.state.selectedItem){
      if(!this.state.hcontent.holder && this.state.hcontent.image || this.props.hidden === "holder"){
        let imageClass = 'fa ' + this.state.hcontent.image;
        holder = [
          <span style={styles.title ? styles.title : {}}>
            <i className={imageClass}/>
          </span>
        ];
      }else if(!this.state.hcontent.image && this.state.hcontent.holder || this.props.hidden === "image"){
        holder = [
          <span style={styles.title ? styles.title : {}}>
            {this.state.hcontent['holder']}
          </span>
        ];
      }else if(this.state.hcontent.image && this.state.hcontent.holder && !this.props.hidden){
        let imageClass = 'fa ' + hcontent.image;
        holder = [
          <span>
            <i className={imageClass}/>{hcontent['holder']}
          </span>
        ];
      }
    }else{
      holder = [
        <span>
          {this.state.selectedItem}
        </span>
      ];
    }

    return(
      <div className="dropWrap">
        {this.props.label ? (
          <span className="dropLabel">{this.props.label}</span>
        ): null}
        <div onMouseEnter={this.onDropToggle} onMouseLeave={this.onDropToggle} className="dropdown">
          <div className="dropHead">
            {holder}
            <i className={arrowClass}></i>
          </div>
          <ul className={menuClass} style={styles.body ? styles.body : {}}>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = Dropdown;
