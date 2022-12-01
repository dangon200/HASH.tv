import React from 'react';
import App from '../components/StreamVideo/App.js'
import generateMuiTheme from "../components/StreamVideo/mui/theme";
import { ThemeProvider } from "@material-ui/styles";

function Support () {
  return (
    <div className='Support'>
      <ThemeProvider theme={generateMuiTheme()}>
      <App/>
      </ThemeProvider>
    </div>
  );
}

export default Support;