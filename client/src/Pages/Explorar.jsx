import React from 'react';
import Filters from '../components/Filters/Filters.jsx'
import App from '../components/StreamVideo/App.js'
import generateMuiTheme from "../components/StreamVideo/mui/theme";
import { ThemeProvider } from "@material-ui/styles";

function Explorar() {
  return (
    <div className='Explorar'>
      <h1>Explorar</h1>
      <Filters/>
      <ThemeProvider theme={generateMuiTheme()}>
      <App/>
      </ThemeProvider>
    </div>
  );
}

export default Explorar;