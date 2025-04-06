import NavigationBar from './components/NavigationBar';
import HomePage from './components/pages/HomePage';
import CourseTOC from './components/pages/CourseTOC';
import ChapterPage from './components/pages/ChapterPage';
import './App.css';
// import courseIndex from './course/index.json'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  
  return (
    
    
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage/>}/>
            <Route path="python">
              <Route index element={<CourseTOC lang="python"/>}/>
              <Route path="chapter/:chno" element={<ChapterPage lang="python"/>}/>
            </Route>
            <Route path="javascript">
              <Route index element={<CourseTOC lang="javascript"/>}/>
              <Route path="chapter/:chno" element={<ChapterPage lang="javascript"/>}/>
            </Route>
            <Route path="c++">
              <Route index element={<CourseTOC lang="c++"/>}/>
              <Route path="chapter/:chno" element={<ChapterPage lang="c++"/>}/>
            </Route>
          
          </Route>
          <Route path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
      
      </Router>
    </div>
    
    
    
  );
}

export default App;
