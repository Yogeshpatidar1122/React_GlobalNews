import React, { useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes, } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const PageSize = 15;
  const apikey = process.env.REACT_APP_NEWS_KEY

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar />
      <LoadingBar height={4} color='#f11946' progress={progress} />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={PageSize} country="in" category="general" />} />
        <Route exact path="/Business" element={<News setProgress={setProgress} apikey={apikey} key="Business" pageSize={PageSize} country="in" category="Business" />} />
        <Route exact path="/Entertainment" element={<News setProgress={setProgress} apikey={apikey} key="Entertainment" pageSize={PageSize} country="in" category="Entertainment" />} />
        <Route exact path="/Health" element={<News setProgress={setProgress} apikey={apikey} key="Health" pageSize={PageSize} country="in" category="Health" />} />
        <Route exact path="/Sports" element={<News setProgress={setProgress} apikey={apikey} key="Sports" pageSize={PageSize} country="in" category="Sports" />} />
        <Route exact path="/Science" element={<News setProgress={setProgress} apikey={apikey} key="Science" pageSize={PageSize} country="in" category="Science" />} />
        <Route exact path="/Technology" element={<News setProgress={setProgress} apikey={apikey} key="Technology" pageSize={PageSize} country="in" category="Technology" />} />
      </Routes>

    </div>
  )
}

export default App;



