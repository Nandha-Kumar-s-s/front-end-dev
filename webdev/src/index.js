import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './App';
import reportWebVitals from './reportWebVitals';
import MovieTable from './moviesearch/movie';
import MyComponent from './inlinecss/inlinecss';
import MyLink from './preventdefault/preventdefault';
import Fragments from './reactfragment/fragment';
import Ref from './ReactHooks/ref';
import LifeCycle from './lifecycle/LifeCycle';
import MyList from './moviesearch/List';
import App from './calculator/calculator';

import Calculator from './calculator/calculator';
import UseMemo from './ReactHooks/useMemo';
import UseCallback from './ReactHooks/useCallBack';
import UseContext from './ReactHooks/useContext';
import UseReducer from './ReactHooks/useReducer';
import UseReducer2 from './ReactHooks/useReducer2';
import UseState from './ReactHooks/useState';
import UseEffect from './ReactHooks/useEffect';
import UseRef from './ReactHooks/ref';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* passing a parameter for the counter Component */}
    {/*<Counter initial = {5}/>*/}
   {/* <MovieTable/>
    <MyComponent/>
    <MyLink/>
    <Fragments/>
    
    <LifeCycle/>

    <MyList/>
    <UseCallback/>
    <Calculator/>
    <UseMemo a = {5} b = {7}/>
    <UseContext/>
    <UseReducer/>
    <UseReducer2/>
    <UseState/>*/}
    <UseEffect/>
    <UseRef/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
