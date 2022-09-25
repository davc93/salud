import { HashRouter,Routes,Route } from 'react-router-dom'
import React from 'react'; 
import {NotFound} from './pages/NotFound';
import {Home} from './pages/Home';
import {Professionals} from './pages/Professionals';
import {Profile} from './pages/Profile'
import Menu from './containers/Menu';
import { ProfessionalPage } from './pages/ProfessionalPage';
import { WorkWithUs } from './pages/WorkWithUs';
function App() {
  return(
    <React.Fragment>
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/professionals' element={<Professionals/>}>
            <Route path=':slug' element={<ProfessionalPage/>} />

          </Route>
          <Route path='/workwithus' element={<WorkWithUs />} />
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
