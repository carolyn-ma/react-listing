import { Listings } from './components/Listings';
import { Header } from './components/Header';
// import { Footer } from './components/Footer';
import { paths } from './pages';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="body code">
        <Header />
        <Route path={paths.home}>
          <Redirect to={paths.listings} />
        </Route>
        <Route path={paths.listings}>
          <Listings />
        </Route>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
