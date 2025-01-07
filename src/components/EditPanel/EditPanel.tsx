import { useState } from 'react';
import './styles.css';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-close.js';
import '@spectrum-web-components/field-label/sp-field-label.js';
import '@spectrum-web-components/textfield/sp-textfield.js';
import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';
import '@spectrum-web-components/action-button/sp-action-button.js'

import EditPropertyContainer from './EditPropertyContainer/EditPropertyContainer';
import { CardProps } from '../../canvas/nodes/Card';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setNodes, updateNode } from '../../store/slices/Nodes';

export interface EditPanelProps {
    showEditPanel: boolean;
    id: string;
    onClose: () => void;
}

export default function EditPanel(props: EditPanelProps) {

    if (!props.showEditPanel) {
        return null;
    }

    const nodes = useSelector((state: RootState) => state.nodes.nodes);
    const dispatch = useDispatch<AppDispatch>();

    const node = nodes.find(node => node.id === props.id);

    return (
        <div className="editpanel">

            <div className='editpanel-header'>
                <p>Edit Panel</p>
                <sp-action-button onClick={() => { props.onClose(); console.log('closing panel...') }} quiet>
                    <sp-icon-close size="s"></sp-icon-close>
                </sp-action-button>
            </div>

            <div className='editpanel-content'>
                <sp-field-label for="object-name">Object name</sp-field-label>
                <sp-textfield id="object-name" placeholder="Value" value={node.data.name}
                    onChange={(e) => {
                        console.log('changing name...', node.id, e.target.value);
                        dispatch(updateNode({ id: node.id, changes: { name: e.target.value } }));
                    }}
                ></sp-textfield>
            </div>

            <div className='editpanel-content'>
                <sp-field-label for="object-description">Object Description</sp-field-label>
                <sp-textfield id="object-description" multiline grows placeholder="Value"></sp-textfield>
            </div>

            <div className='editproperty'>
                <sp-accordion density="spacious" quiet size="s" allow-multiple>
                    <sp-accordion-item label="ATTRIBUTES" open>

                        <EditPropertyContainer value="value" />
                        <div className='editproperty-button-container'>
                            <sp-action-button>
                                <sp-icon-add slot="icon" size="s"></sp-icon-add>
                                Add
                            </sp-action-button>
                        </div>

                    </sp-accordion-item>
                </sp-accordion>


                <sp-accordion density="spacious" quiet size="s" allow-multiple>
                    <sp-accordion-item label="METADATA" open>

                        <EditPropertyContainer value="value" />
                        <div className='editproperty-button-container'>
                            <sp-action-button>
                                <sp-icon-add slot="icon" size="s"></sp-icon-add>
                                Add
                            </sp-action-button>
                        </div>

                    </sp-accordion-item>
                </sp-accordion>

                <sp-accordion density="spacious" quiet size="s" allow-multiple>
                    <sp-accordion-item label="ACTIONS" open>

                        <EditPropertyContainer value="value" />
                        <div className='editproperty-button-container'>
                            <sp-action-button>
                                <sp-icon-add slot="icon" size="s"></sp-icon-add>
                                Add
                            </sp-action-button>
                        </div>

                    </sp-accordion-item>
                </sp-accordion>

            </div>
        </div>
    );
}