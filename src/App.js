import React  from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Component/Navbar';
 import News from './Component/News';
 import LoadingBar from 'react-top-loading-bar'




 const App=()=>{

  const  pageSize = 10;
    // const apiKey=process.env.REACT_APP_NEWS_API
    const apiKey= "6f6a1fce8aeb4bf2ae52c68313fa466e"
    const [progress, setProgress] = useState(0)
    



   
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
         progress={progress}
        height={3}
        />
      
      <Routes>
         <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={pageSize} country="in" category="Business"/>}Business/>
         <Route exact path="/entertainMent" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainMent" pageSize={pageSize} country="in" category="entertainMent"/>}entertainMent/>
         <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>}general/>
         <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>}sports/>
         <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}science/>
         <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}technology/>
         <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}health/>
   </Routes>
    </Router>
  </div>
    )
  }
  export default App;


