
/* eslint-disable @typescript-eslint/no-explicit-any */

import './App.css';

import Flow from './canvas/Flow/Flow';

import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/spectrum-two/theme-light.js';
import '@spectrum-web-components/theme/spectrum-two/scale-medium.js';

function App() {

  return (
    <sp-theme scale="medium" system="spectrum-two" color="light" className="App">


      <div className='canvas'>
        <Flow />
      </div>

    </sp-theme>
  );
}

export default App;