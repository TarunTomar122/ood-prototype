import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardProps } from '../../canvas/nodes/Card';

import { singleNode } from '../../nodes';

interface NodesState {
    nodes: CardProps[];
}

const initialState: NodesState = {
    nodes: singleNode,
};

interface UpdateNodeState {
    id: string;
    changes: any;
}

const nodesSlice = createSlice({
    name: 'nodes',
    initialState,
    reducers: {
        setNodes: (state, action: PayloadAction<CardProps[]>) => {
            state.nodes = action.payload;
        },
        updateNode: (state, action: PayloadAction<UpdateNodeState>) => {
            const index = state.nodes.findIndex(node => node.id === action.payload.id);
            if (index !== -1) {
                // say we got the name updated in the changes then we have to update that from state.nodes[index].data
                // and the changes can be any other property of the node
                state.nodes[index].data = { ...state.nodes[index].data, ...action.payload.changes };
            }
        },
    },
});

export const { setNodes, updateNode } = nodesSlice.actions;

export default nodesSlice.reducer;