import DocumentTitle from 'react-document-title';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import { Header, Footer } from '../../components';
import { BodyWrapperStyled, SiteWrapperStyled } from '../../stylesheets/core.styles';

const App = ({ children }) => {
  return (
      <DocumentTitle title="Booking website">
        <MuiThemeProvider>
          <BodyWrapperStyled>
            <Header />
            { children }
            <Footer />
          </BodyWrapperStyled>
        </MuiThemeProvider>
      </DocumentTitle>
  );
};

export default App;
