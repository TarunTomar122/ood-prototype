import { Node, NodeProps } from '@xyflow/react';

// import './card.css';

import EditableLabel from '../../components/EditableLabel/EditableLabel';
import Section from './components/Section/Section';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { updateNode } from '../../store/slices/Nodes';

interface Item {
    label: string;
    id: string;
    checked: boolean;
}

export interface CardProps extends Node {
    data: {
        name: string;
        description: string;
        attributes: Item[];
        metadata: Item[];
        actions: Item[];
    };
}

export default function Card(props: CardProps) {
    const nodes = useSelector((state: RootState) => state.nodes.nodes);
    const dispatch = useDispatch<AppDispatch>();
    const node = nodes.find(node => node.id === props.id);

    if (!node) {
        return null;
    }

    return (
        <div className='card' onClick={() => {
            // fire a custom event to show the edit panel with the data
            const event = new CustomEvent('showEditPanel', {
                detail: {
                    id: props.id
                }
            });
            document.dispatchEvent(event);
        }}>
            <div className='card-header'>
                <EditableLabel value={node.data.name} spanClassName='header-title' inputClassName='header-input' onChange={(updatedName: string) => {
                    dispatch(updateNode({ id: props.id, changes: { name: updatedName } }));
                }} />
                <sp-icon-info-circle size="m"></sp-icon-info-circle>
            </div>

            {/** Attributes */}

            <Section
                label="Attributes"
                key={JSON.stringify(node.data.attributes)}
                rows={node.data.attributes}
                addRow={() => {
                    dispatch(updateNode({ id: props.id, changes: { attributes: [...node.data.attributes, { label: "New attribute", id: "3a2b1c" }] } }));
                }}
                onChange={() => { }}
                onCheckboxChange={(id: string, checked: boolean) => {
                    console.log('id', id, 'checked', checked);
                    dispatch(updateNode({ id: props.id, changes: { attributes: node.data.attributes.map(attribute => attribute.id === id ? { ...attribute, checked } : attribute) } }));
                }}
            />

            {/** Metadata */}

            <Section
                label="Metadata"
                key={JSON.stringify(node.data.metadata)}
                rows={node.data.metadata}
                addRow={() => {
                    dispatch(updateNode({ id: props.id, changes: { metadata: [...node.data.metadata, { label: "New metadata", id: "2a3b4c" }] } }));
                }}
                onChange={() => { }}
                onCheckboxChange={(id: string, checked: boolean) => {
                    dispatch(updateNode({ id: props.id, changes: { metadata: node.data.metadata.map(metadata => metadata.id === id ? { ...metadata, checked } : metadata) } }));
                }}
            />

            {/** Actions */}

            <Section
                label="Actions"
                key={JSON.stringify(node.data.actions)}
                rows={node.data.actions}
                addRow={() => {
                    dispatch(updateNode({ id: props.id, changes: { actions: [...node.data.actions, { label: "New action", id: "1a2b3c" }] } }));
                }}
                onChange={() => { }}
                onCheckboxChange={(id: string, checked: boolean) => {
                    dispatch(updateNode({ id: props.id, changes: { actions: node.data.actions.map(action => action.id === id ? { ...action, checked } : action) } }));
                }}
            />

        </div >
    );
}