import { NodeProps } from '@xyflow/react';
import { useState } from 'react';

import './card.css';

import EditableLabel from '../../components/EditableLabel/EditableLabel';
import Section from './components/Section/Section';
import { SectionRowProps } from './components/SectionRow/SectionRow';

export type CardProps = NodeProps & {
    data: {
        attributes: SectionRowProps[];
        metadata: SectionRowProps[];
        actions: SectionRowProps[];
    };
};

export default function Card(props: CardProps) {

    const [attributes, setAttributes] = useState<SectionRowProps[]>(props.data.attributes);

    const [metadata, setMetadata] = useState<SectionRowProps[]>(props.data.metadata);

    const [actions, setActions] = useState<SectionRowProps[]>(props.data.actions);

    return (
        <div className='card'>

            <div className='header'>
                <EditableLabel value="Object name" spanClassName='header-title' inputClassName='header-input' />
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