import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {Increment, Decrement} from './Actions'
import Nav from './components/header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import List from './route/list'
import About from './route/about'
import Detail from './route/listdetail'


function App() {
  const counter = useSelector(state => state.counter)
  const islog = useSelector(state => state.login)

  const dispatch = useDispatch()

  const home = () => {
    return (
      <>
        <h1>Hello word { counter }</h1>
        <button onClick={() => dispatch(Increment())}>+</button>
        <button onClick={() => dispatch(Decrement())}>-</button>
        { islog? <h3>Valuble information i can' see</h3> : ''}
      </>
    )
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={home}/>
          <Route path="/list" exact component={List}/>
          <Route path="/about" component={About}/>
          <Route path="/list/:id" component={Detail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
