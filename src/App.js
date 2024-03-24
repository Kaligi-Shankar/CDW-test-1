import React from 'react';
import './App.css';

const TestPage= React.lazy(()=> import('./TestPage'))

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={"loading"}>
          <TestPage/>
      </React.Suspense>
    </div>
  );
}

export default App;
