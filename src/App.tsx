import { useCallback, useState, useMemo } from 'react';
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { initialNodes } from './nodes';
import { initialEdges } from './edges';

import TextUpdaterNode from './nodes/CustomNode';
import CustomGroupNode from './nodes/GroupNode';

import './App.css';

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode, customGroupNode: CustomGroupNode }), []);


  const onNodesChange = useCallback(
    (changes) => {
      console.log('onNodesChange', changes)
      setNodes((nds) => applyNodeChanges(changes, nds))
    },
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => {
      console.log('onEdgesChange', changes)
      setEdges((eds) => applyEdgeChanges(changes, eds))
    },
    [setEdges],
  );
  const onConnect = useCallback(
    (connection) => {
      console.log('onConnenc', connection, edges)
      connection.type = "smoothstep"
      setEdges((eds) => addEdge(connection, eds))
    },
    [setEdges],
  );

  return (
    <div className="App">
      <header className="App-header">React Flow - CRA Example</header>
      <div>

      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        type="smoothstep"
        attributionPosition="top-right"
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;