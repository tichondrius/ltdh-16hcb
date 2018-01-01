import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { ROUTE_PATH } from '../../../../Routes';
import { FooterWrapperStyled } from '../../stylesheets/footer.style';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
  changePath = (path) => {
    this.props.history.push(path);
  }
  render() {
    const { pathname } = this.props.location;
    let index = -1;
    switch (pathname) {
      case ROUTE_PATH.INFO_LIST:
        index = 0;
    }
    return (
      <FooterWrapperStyled>
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={index}>
            <BottomNavigationItem
              label="Thông tin"
              icon={recentsIcon}
              onClick={() => this.changePath(ROUTE_PATH.INFO_LIST)}
            />
            <BottomNavigationItem
              label="Điểm"
              icon={favoritesIcon}
              onClick={() => {}}
            />
            <BottomNavigationItem
              label="Xe"
              icon={nearbyIcon}
              onClick={() => {}}
            />
          </BottomNavigation>
        </Paper>
      </FooterWrapperStyled>
    );
  }
}

export default withRouter(Footer);
