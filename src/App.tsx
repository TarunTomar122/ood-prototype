
/* eslint-disable @typescript-eslint/no-explicit-any */

import './App.css';

import { useEffect, useState } from 'react';

import Flow from './canvas/Flow/Flow';

import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/spectrum-two/theme-light.js';
import '@spectrum-web-components/theme/spectrum-two/scale-medium.js';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import EditPanel from './components/EditPanel/EditPanel';

function App() {

  const [showEditPanel, setShowEditPanel] = useState(false);
  const [nodeId, setNodeId] = useState('');

  useEffect(() => {
    document.addEventListener('showEditPanel', (event: Event) => {
      const customEvent = event as CustomEvent<{ id: string }>;
      setShowEditPanel(true);
      setNodeId(customEvent.detail.id);
    })
  }, []);

  return (
    <sp-theme scale="medium" system="spectrum-two" color="light" className="App">

      <Header />
      <Sidebar />
      <EditPanel showEditPanel={showEditPanel} id={nodeId} onClose={() => { setShowEditPanel(false) }} />

      <div className='canvas'>
        <Flow />
      </div>

    </sp-theme>
  );
}

export default App;