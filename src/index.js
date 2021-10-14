import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './main'
import Carousel1 from './carousel'
import Header1 from './header'
import MusicPlayer from './musicPlayer'
import Footer1 from  './footer'
import Spinner from './spinner'
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <MusicPlayer /> */}
    {/* <Spinner /> */}
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

