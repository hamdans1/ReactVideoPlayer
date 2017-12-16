import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD90ZwzVRFRE0sBtwK0qC1S80bPl3FJ3tg';

// Create a new component. Component should produce some html

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Integrate the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
