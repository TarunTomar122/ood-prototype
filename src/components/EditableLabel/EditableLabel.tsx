import React, { useState } from 'react';

import './styles.css';

import '@spectrum-web-components/textfield/sp-textfield.js';

interface EditableLabelProps {
    value: string;
    spanClassName?: string;
    inputClassName?: string;
}

export default function EditableLabel(props: EditableLabelProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(props.value);


    const handleFocus = () => {
        setIsEditing(true);
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
                <span onClick={handleFocus} className={props.spanClassName}>{text}</span>
            )}
        </div>
    )
}