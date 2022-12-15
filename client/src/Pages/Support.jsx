import React from 'react';
import App from '../components/100msViewer/App.js'
import generateMuiTheme from "../components/StreamVideo/mui/theme";
import { ThemeProvider } from "@material-ui/styles";
import StreamProf2 from '../components/MyStreams/streamProf2.jsx';

function Support () {
  return (
    <div className='Support'>
      <ThemeProvider theme={generateMuiTheme()}>
      <StreamProf2 />
      </ThemeProvider>
    </div>
  );
}

export default Support;