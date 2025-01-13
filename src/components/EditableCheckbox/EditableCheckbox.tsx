import React, { useState } from 'react';

import './styles.css';

import '@spectrum-web-components/checkbox/sp-checkbox.js';

interface EditableCheckboxProps {
    id: string;
    value: string;
    checked: boolean;
    spanClassName?: string;
    inputClassName?: string;
    onCheckboxChange: (id: string, checked: boolean) => void;
}

export default function EditableLabel(props: EditableCheckboxProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(props.value);
    const [checked, setChecked] = useState(props.checked);

    const handleFocus = () => {
        setIsEditing(true);
    };

    const handleClick = (e: React.MouseEvent) => {
        // Prevent the checkbox from toggling when clicking on the text area
        if ((e.target as HTMLElement).tagName !== 'SP-CHECKBOX') {
            handleFocus();
        }
        e.stopPropagation();
    };

    const handleCheckboxChange = (e: any) => {
        props.onCheckboxChange(props.id, e.target.checked);
        setChecked(e.target.checked);
    }

    const handleBlur = () => {
        setIsEditing(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div className='editable-label'>
            {isEditing ? (
                <sp-textfield
                    id="input"
                    value={text}
                    className="nodrag"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                </sp-textfield>
            ) : (
                <sp-checkbox size="l"
                    onClick={handleClick}
                    onChange={handleCheckboxChange}
                    className={props.spanClassName}
                    checked={checked}
                >
                    {text}
                </sp-checkbox>
            )}
        </div>
    )
}