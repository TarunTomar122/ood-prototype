import '@spectrum-web-components/icons-workflow/icons/sp-icon-menu-hamburger.js';
import '@spectrum-web-components/action-button/sp-action-button.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-add.js';

import './styles.css';

export interface EditPropertyContainerProps {
    value: string;
    onChange: (e: any) => void;
}

export default function SectionRow(props: EditPropertyContainerProps) {
    return (
        <div className='editproperty-container'>
            <div className="editproperty-row">
                <sp-icon-menu-hamburger size="m"></sp-icon-menu-hamburger>
                <sp-textfield value={props.value} onChange={props.onChange}></sp-textfield>
            </div>
        </div>

    );
}