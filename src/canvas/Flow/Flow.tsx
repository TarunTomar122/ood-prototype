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

import { initialNodes, singleNode } from '../../nodes';
import { initialEdges } from '../../edges';

import TextUpdaterNode from '../nodes/CustomNode';
import NodeComponent from '../nodes/NodeComponent';
import CustomGroupNode from '../nodes/GroupNode';

import './Flow.css';

function Flow() {
    const [nodes, setNodes] = useState<Node[]>(singleNode);
    const [edges, setEdges] = useState<Edge[]>([]);

    const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode, customGroupNode: CustomGroupNode, main: NodeComponent }), []);

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
            <Background color="#ccc" size={-1} bgColor='#E9E9E9'/>
        </ReactFlow>
    );
}

export default Flow;