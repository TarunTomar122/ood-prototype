'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

// import './App.css';

import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

import Flow from './canvas/Flow/Flow';

import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/spectrum-two/theme-light.js';
import '@spectrum-web-components/theme/spectrum-two/scale-medium.js';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import EditPanel from './components/EditPanel/EditPanel';
import SideToolbar from './components/SideToolbar/SideToolbar';

import '@spectrum-web-components/button/sp-button.js';

function App() {
  const { data: session } = useSession()
  const [showEditPanel, setShowEditPanel] = useState(false)
  const [nodeId, setNodeId] = useState('')

  useEffect(() => {
    document.addEventListener('showEditPanel', (event: Event) => {
      const customEvent = event as CustomEvent<{ id: string }>
      setShowEditPanel(true)
      setNodeId(customEvent.detail.id)
    })
  }, [])

  if (!session) {
    return (
      <div>
        Not signed in <br />
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      </div>
    )
  }

  return (
    <sp-theme scale="medium" system="spectrum-two" color="light" className="App">

      <Header />
      <Sidebar />
      <EditPanel showEditPanel={showEditPanel} id={nodeId} onClose={() => { setShowEditPanel(false) }} />

      <SideToolbar />
      <div className='canvas'>
        <Flow />
      </div> 

    </sp-theme>
  );
}

export default App