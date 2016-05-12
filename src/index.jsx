import React from 'react';
import ReactDOM from 'react-dom';
import UserMenu from './usermenu/index.js';


// This is a mockup of Framework 3.0 layout for demonstrating and developing
// menu animations.  Currently only Notification and User Menu are in the appbar
// as drop downs. 

// TODO - Confirm accessibility


class Animenu extends React.Component {
  constructor (props){
    super(props);
    this.state = {visibleList1: false,visibleList2: false};

    this.handleClickMenu1 = this.handleClickMenu1.bind(this);
    this.handleClickMenu2 = this.handleClickMenu2.bind(this);
  }

  handleClickMenu1() {
    console.log('Menu1 Button Clicked');
    this.setState({...this.state, visibleList1: !this.state.visibleList1});

  }
  handleClickMenu2() {
    console.log('Menu2 Button Clicked');
    this.setState({...this.state, visibleList2: !this.state.visibleList2});

  }

  render() {
    let style = { width: "100%", backgroundColor: "gray", position:'relative', zIndex: '4',flex: "0 0 40px", display:'flex', justifyContent: 'space-between'};

      return (
      <div style={{display: "flex", flexDirection: "column"}}>
        <div className="appbar" style={style}>
          <UserMenu  cbClickUserMenuIcon={this.handleClickMenu1}
                    userName="Notification"
                    visibleList={this.state.visibleList1}
          />

          <UserMenu  cbClickUserMenuIcon={this.handleClickMenu2}
                    userName="John Doe"
                    visibleList={this.state.visibleList2}
          />
        </div>
        <div className="appview2Wrapper" style={{display: 'flex' }}>
          <div className="navbar" style={{flex: '0 0 50px', backgroundColor: 'lightseagreen'}}
                onClick={()=>{console.log('nav bar clicked!!')}}
          ></div>
          <div style={{backgroundColor:"aqua", flex: "1 1 95%"}}></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Animenu />, document.getElementById('app'));
