import './styles.css';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-add.js';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setNodes } from '../../store/slices/Nodes';
import { useEffect } from 'react';

function randomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function getNewNode() {
    return {
        id: randomId(),
        type: 'card',
        data: {
            name: 'New Node',
            description: 'New Node Description',
            attributes: [
                {
                    label: "Comments",
                    id: randomId(),
                    checked: false
                }
            ],
            metadata: [
                {
                    label: "Priority",
                    id: randomId(),
                    checked: false
                }
            ],
            actions: [
                {
                    label: "Edit",
                    id: randomId(),
                    checked: false
                }
            ]
        },
        position: {
            x: 0,
            y: 0
        }
    }
}

export default function SideToolbar() {

    const dispatch = useDispatch<AppDispatch>();
    const nodes = useSelector((state: RootState) => state.nodes.nodes);

    useEffect(() => {
        console.log("nodes in side toolbar", nodes);
    }, [nodes]);

    return (
        <div className="side-toolbar">
            <div className='side-toolbar-button'>
                <sp-action-button onClick={() => {
                    dispatch(setNodes([...nodes, getNewNode()]));
                }} quiet>
                    <sp-icon-add slot="icon" size="l"></sp-icon-add>
                </sp-action-button>
            </div>
        </div>
    );
}