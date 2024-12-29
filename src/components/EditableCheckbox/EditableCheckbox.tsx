import React, { useState } from 'react';

import './styles.css';

import '@spectrum-web-components/checkbox/sp-checkbox.js';

interface EditableCheckboxProps {
    value: string;
    spanClassName?: string;
    inputClassName?: string;
}

export default function EditableLabel(props: EditableCheckboxProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(props.value);

    const handleFocus = () => {
        setIsEditing(true);
    };

    const handleClick = (e: React.MouseEvent) => {
        // Prevent the checkbox from toggling when clicking on the text area

        console.log('e.target', (e.target as HTMLElement).tagName);
        if ((e.target as HTMLElement).tagName !== 'SP-CHECKBOX') {
            handleFocus();
        }
    };

    const handleCheckboxChange = (e: any) => {
        console.log('checkbox change', e);
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
                >
                    {text}
                </sp-checkbox>
            )}
        </div>
    )
}