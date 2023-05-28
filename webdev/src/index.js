import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './App';
import reportWebVitals from './reportWebVitals';
import MovieTable from './moviesearch/movie';
import MyComponent from './inlinecss/inlinecss';
import MyLink from './preventdefault/preventdefault';
import Fragments from './reactfragment/fragment';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* passing a parameter for the counter Component */}
    {/*<Counter initial = {5}/>*/}
    <MovieTable/>
    <MyComponent/>
    <MyLink/>
    <Fragments/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
