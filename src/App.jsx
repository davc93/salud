import { HashRouter,Routes,Route } from 'react-router-dom'
import React from 'react'; 
import {NotFound} from './pages/NotFound';
import {Home} from './pages/Home';
import {Blog} from './pages/Blog';
import {Profile} from './pages/Profile'
import Menu from './containers/Menu';
import { BlogPost } from './pages/BlogPost';

function App() {
  return(
    <React.Fragment>
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog/>}>
            <Route path=':slug' element={<BlogPost/>} />

          </Route>

          <Route path='/profile' element={<Profile/>} />
          <Route path='*' element= {<NotFound/>} />
        </Routes>
        <footer>
        </footer>
      </HashRouter>
    </React.Fragment>
  ) 

}

export default App;
