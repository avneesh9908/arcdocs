import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Navbar from './component/Navbar/navbar';
// import LoadingSpinner from './component/LoadingSpinner'; // Create this component
import './App.css';

// Lazy-loaded components
const Home = lazy(() => import('./component/Pages/home'));
const Studio = lazy(() => import('./component/Pages/studio'));
const Projects = lazy(() => import('./component/Pages/Project'));
const Contact = lazy(() => import('./component/Pages/contact'));

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      <Suspense >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/studio" component={Studio} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;