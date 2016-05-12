import React from 'react';
import UserMenuList from '../usermenulist/index.js';


export default class UserMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // userMenu(avatar & caret) style
        const userMenuStyle = {
          display: 'flex',
          alignItems: 'flex-end',
          marginRight: '18px',
          cursor: 'pointer',
          zIndex: '2',
          padding: '11px',
          backgroundColor: 'transparent',
          width: '272px'
        };
        const avatarWhiteIconStyle = {
          height: '24px',
          width: '24px',
          display: 'flex',
          marginTop: '1px'
        };
        // styles shoebox-darkblue (avatar) icon
        const avatarBlueIconStyle = {
          height: '24px',
          width: '24px',
          display: 'flex',
          marginTop: '1px',
          padding: '2px',
          borderRadius: '3px',
          backgroundColor: '#fff'
        };
        // styles caret-up-white icon
        const caretUpIconStyle = {
          height: '8px',
          width: '10px',
          display: 'flex',
          paddingLeft: '8px',
          paddingBottom: '9px'
        };
        // styles caret-down-white icon
        const caretDownIconStyle = {
          height: '8px',
          width: '10px',
          display: 'flex',
          paddingLeft: '8px',
          paddingBottom: '9px'
        };
        // styles menu list dropdown, sets transition to/from off page
        const menuListStyle = {
          position: 'absolute',
          maxHeight: '100vh', //
          width: '272px',
          //left: '0',
          overflow: 'hidden',
          opacity: '1',
          zIndex: '1',
          visibility: 'visible',
          backgroundColor: '#ffffff',
          transition: 'max-height .6s ease-in, opacity .4s ease-in'
        };

        const listStyle = this.props.visibleList ? {...menuListStyle} :
                          {...menuListStyle, maxHeight: '0',
                              opacity: '0',
                              visibility: 'hidden',
                              transition: 'max-height .6s ease-out, opacity .4s ease-out'};

        return (
            <div style={{display:'flex', flexDirection: "column", position:"relative", zIndex: '2'}}>
              <div style={userMenuStyle}>
                  <span onClick={()=>this.props.cbClickUserMenuIcon()}>Click to Test Menu Animation</span>
              </div>
              <UserMenuList listStyle={listStyle} visibleList={this.props.visibleList} cbClickLogin={this.props.cbClickLogin} customLinks={this.props.customLinks} cbClickLogout={this.props.cbClickLogout} userName={this.props.userName} userstate={this.props.userstate}/>
            </div>

        );
    }
}

UserMenu.propTypes = {
  cbClickAddUserItem: React.PropTypes.func,
  cbClickLogin : React.PropTypes.func,
  cbClickLogout : React.PropTypes.func,
  cbClickUserMenuIcon : React.PropTypes.func,
  customLinks: React.PropTypes.array,
  menuItems : React.PropTypes.array,
  userName : React.PropTypes.string,
  userstate : React.PropTypes.object,
  visibleList : React.PropTypes.bool
};
