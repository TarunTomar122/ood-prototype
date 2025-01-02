import { Handle, Position } from '@xyflow/react';

import '@spectrum-web-components/icons-workflow/icons/sp-icon-menu-hamburger.js';
import EditableCheckbox from '../../../../components/EditableCheckbox/EditableCheckbox';

import './styles.css';

export interface SectionRowProps {
    label: string;
    onNodeConnect?: (nodeId: string) => void;
}

export default function SectionRow({ label }: SectionRowProps) {
    return (
        <div className='content-row'>

            <sp-icon-menu-hamburger size="m"></sp-icon-menu-hamburger>

            <EditableCheckbox value={label} spanClassName='checkbox-title' inputClassName='checkbox-input' />
            <Handle
                type="target"
                position={Position.Left}
                id={label}
                className="left-connector"
            />
            <Handle
                type="source"
                position={Position.Right}
                id={label}
                className="right-connector"
            />
        </div>
    );
}