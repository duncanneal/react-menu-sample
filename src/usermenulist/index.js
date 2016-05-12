import React from 'react';

export default class UserMenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          visibleList: false
        };
    }

    render() {
      //styles dropdown tray placement under appbar
      const dropdownTrayStyle = {
        position: 'absolute'
        //marginTop: '5px'
      };
      //styles usermenulist text & placement
      const listItemsStyle = {
        display: 'flex',
        flexDirection: 'column',
        color: '#444444'
      };
      //styles 'username' list item
      const userNameStyle = {
        fontSize: '20px',
        fontWeight: '700',
        padding: '6px 40px 4px'
      };
      //styles 'viewprofile' list item
      const viewProfileItemStyle = {
        textDecoration: 'none',
        fontSize: '14px',
        padding: '4px 40px 6px'
      };
      //styles divider lines
      const dividerStyle = {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '1px',
        margin: '0px 0px 0px',
        borderBottom: '1px solid #e1e8ed'
      };
      //styles 'settings link' list item
      const settingsItemStyle = {
        textDecoration: 'none',
        color: '#444444',
        padding: '0px 40px 4px',
        marginTop: '6px',

          ':hover': {
            color: '#ffffff'
            }
      };
      //styles 'logout' list item
      const logoutItemStyle = {
        textDecoration: 'none',
        color: '#444444',
        padding: '6px 40px 10px',

          ':hover': {
            color: '#ffffff'
            }
      };

      return (
        <div key="menu" className="dropdownTray" style={dropdownTrayStyle}>
          <div className="dropdownList" style={this.props.listStyle}>
            <div className="listItems" style={listItemsStyle}>
              <div style={userNameStyle}>{this.props.userName}</div>
              <div style={viewProfileItemStyle}>View Profile</div>
              <input placeholder="Type something" onFocus={()=>{console.log('Input has focus!!!!');}}/>
              <div style={settingsItemStyle} >Settings</div>
              <div style={settingsItemStyle} >Stuff</div>
              <div style={settingsItemStyle} >Other Stuff</div>
              <div style={logoutItemStyle} cbClickLogout={this.props.cbClickLogout}>Log out</div>
            </div>
          </div>
        </div>
      );
    }
}

UserMenuList.propTypes = {
  cbClickLogin : React.PropTypes.func,
  cbClickLogout : React.PropTypes.func,
  customLinks: React.PropTypes.array,
  listStyle : React.PropTypes.object,
  userName : React.PropTypes.string,
  userstate : React.PropTypes.object,
  visibleList : React.PropTypes.bool
};

export default UserMenuList;
