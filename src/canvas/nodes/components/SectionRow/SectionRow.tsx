import { Handle, Position } from '@xyflow/react';

import '@spectrum-web-components/icons-workflow/icons/sp-icon-menu-hamburger.js';
import EditableCheckbox from '../../../../components/EditableCheckbox/EditableCheckbox';

// import './styles.css';

export interface SectionRowProps {
    label: string;
    id: string;
    checked: boolean;
    onNodeConnect?: (nodeId: string) => void;
    onCheckboxChange: (id: string, checked: boolean) => void;
}

export default function SectionRow({ label, id, onCheckboxChange, checked }: SectionRowProps) {
    return (
        <div className='content-row'>

            <sp-icon-menu-hamburger size="m"></sp-icon-menu-hamburger>

            <EditableCheckbox  id={id} value={label} checked={checked} onCheckboxChange={onCheckboxChange} spanClassName='checkbox-title' inputClassName='checkbox-input' />
            <Handle
                type="target"
                position={Position.Left}
                id={id}
                className="left-connector"
            />
            <Handle
                type="source"
                position={Position.Right}
                id={id}
                className="right-connector"
            />
        </div>
    );
}