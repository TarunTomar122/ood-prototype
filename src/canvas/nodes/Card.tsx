import { Node } from '@xyflow/react';
import { useState } from 'react';

import './card.css';

import EditableLabel from '../../components/EditableLabel/EditableLabel';
import Section from './components/Section/Section';
import { SectionRowProps } from './components/SectionRow/SectionRow';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setNodes, updateNode } from '../../store/slices/Nodes';

export type CardProps = Node & {
    id: string;
    data: {
        name: string;
        description: string;
        attributes: SectionRowProps[];
        metadata: SectionRowProps[];
        actions: SectionRowProps[];
    };
};

export default function Card(props: CardProps) {

    const [name, setName] = useState<string>(props.data.name);

    const [attributes, setAttributes] = useState<SectionRowProps[]>(props.data.attributes);

    const [metadata, setMetadata] = useState<SectionRowProps[]>(props.data.metadata);

    const [actions, setActions] = useState<SectionRowProps[]>(props.data.actions);

    const nodes = useSelector((state: RootState) => state.nodes.nodes);
    const dispatch = useDispatch<AppDispatch>();
    const node = nodes.find(node => node.id === props.id);


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
                rows={attributes}
                addRow={() => {
                    setAttributes([...attributes, { label: "New attribute" }]);
                }}
                onChange={() => { }}
            />

            {/** Metadata */}

            <Section
                label="Metadata"
                rows={metadata}
                addRow={() => {
                    setMetadata([...metadata, { label: "New metadata" }]);
                }}
                onChange={() => { }}
            />

            {/** Actions */}

            <Section
                label="Actions"
                rows={actions}
                addRow={() => {
                    setActions([...actions, { label: "New action" }]);
                }}
                onChange={() => { }}
            />

            {/* <Handle type="source" position={Position.Left} id="a" style={{
                height: "100%",
                borderRadius: 0,
                opacity: 0
            }} />

            <Handle
                type="target"
                position={Position.Right}
                id="d"
                style={{
                    height: "20%",
                    borderRadius: 20,
                }}
            /> */}
        </div >
    );
}