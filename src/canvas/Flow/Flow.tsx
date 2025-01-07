import { useCallback, useState, useMemo } from 'react';
import {
    ReactFlow,
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Edge,
    Connection,
    EdgeChange,
    NodeChange,
    Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { singleNode } from '../../nodes';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setNodes, updateNode } from '../../store/slices/Nodes';

import Card, { CardProps } from '../nodes/Card';

import './Flow.css';

function Flow() {

    // const [nodes, setNodes] = useState<CardProps[]>(singleNode);
    const [edges, setEdges] = useState<Edge[]>([]);

    const nodes = useSelector((state: RootState) => state.nodes.nodes);
    const dispatch = useDispatch<AppDispatch>();

    const nodeTypes = useMemo(() => ({ card: Card }), []);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => {
            // setNodes((nds) => applyNodeChanges(changes, nds));
            dispatch(setNodes(applyNodeChanges(changes, nodes)));
        },
        [dispatch, nodes],
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => {
            setEdges((eds) => applyEdgeChanges(changes, eds));
        },
        [setEdges],
    );

    const onConnect = useCallback(
        (connection: Connection) => {
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
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="top-right"
        >
            <Background color="#ccc" size={-1} bgColor='#E9E9E9' />
            <Controls />
        </ReactFlow>
    );
}

export default Flow;