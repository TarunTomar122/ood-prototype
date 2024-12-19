import { useCallback, useState, useMemo } from 'react';
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Edge,
  Node,
  Connection,
  EdgeChange,
  NodeChange,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { initialNodes } from './nodes';
import { initialEdges } from './edges';

import TextUpdaterNode from './nodes/CustomNode';
import CustomGroupNode from './nodes/GroupNode';

import './App.css';

function Flow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode, customGroupNode: CustomGroupNode }), []);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      console.log('onNodesChange', changes);
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      console.log('onEdgesChange', changes);
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges],
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      console.log('onConnect', connection, edges);
      (connection as Edge).type = "smoothstep";
      setEdges((eds) => addEdge(connection, eds));
    },
    [edges],
  );

  return (
    <div className="App">
      <header className="App-header">React Flow - CRA Example</header>
      <div></div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        attributionPosition="top-right"
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;