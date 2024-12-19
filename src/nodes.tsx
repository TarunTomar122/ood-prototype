import { Node, Position } from '@xyflow/react';

export const initialNodes: Node[] = [
    {
        id: 'A',
        type: 'customGroupNode',
        position: { x: 0, y: 0 },
        data: { label: 'Node A' },
        style: {
            height: 200,
            width: 300,
        },
        handles: [
            {
                id: 'a',
                position: Position.Left,
                type: 'source',
                x: 10,
                y: 10,
            },
            {
                id: 'b',
                position: Position.Right,
                type: 'target',
                x: 10,
                y: 10,
            }
        ]
    },
    {
        id: 'A-1',
        type: 'textUpdater',
        data: { label: 'Child Node 1' },
        position: { x: 10, y: 10 },
        parentId: 'A',
        extent: 'parent',
        expandParent: true,
        draggable: false,
    },
    {
        id: 'A-2',
        type: 'textUpdater',
        data: { label: 'Child Node 2' },
        position: { x: 10, y: 70 },
        parentId: 'A',
        extent: 'parent',
        expandParent: true,
        draggable: false,
    },
    {
        id: 'B',
        type: 'customGroupNode',
        position: { x: -400, y: 200 },
        data: { label: 'Node B' },
        style: {
            height: 200,
            width: 300,
            backgroundColor: 'rgba(240,240,240,0.25)',
        },
    },
    {
        id: 'B-1',
        data: { label: 'Child 1' },
        type: 'textUpdater',
        position: { x: 10, y: 20 },
        parentId: 'B',
        extent: 'parent',
        draggable: false,
        expandParent: true,
    },
    {
        id: 'B-2',
        data: { label: 'Child 2' },
        type: 'textUpdater',
        position: { x: 10, y: 80 },
        parentId: 'B',
        extent: 'parent',
        draggable: false,
        expandParent: true,
    },
    {
        id: 'B-3',
        data: { label: 'Child 3' },
        type: 'textUpdater',
        position: { x: 10, y: 140 },
        parentId: 'B',
        extent: 'parent',
        draggable: false,
        expandParent: true,
    },
    {
        id: 'C',
        type: 'textUpdater',
        position: { x: 400, y: 50 },
        data: { label: 'Node C' },
    },
];