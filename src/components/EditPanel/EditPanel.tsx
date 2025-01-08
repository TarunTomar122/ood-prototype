import './styles.css';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-close.js';
import '@spectrum-web-components/field-label/sp-field-label.js';
import '@spectrum-web-components/textfield/sp-textfield.js';
import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';
import '@spectrum-web-components/action-button/sp-action-button.js'

import EditPropertyContainer from './EditPropertyContainer/EditPropertyContainer';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { updateNode } from '../../store/slices/Nodes';

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

    if (!node) {
        return null;
    }

    return (
        <div className="editpanel">

            <div className='editpanel-header'>
                <p>Edit Panel</p>
                <sp-action-button onClick={() => { props.onClose(); }} quiet>
                    <sp-icon-close size="s"></sp-icon-close>
                </sp-action-button>
            </div>

            <div className='editpanel-content'>
                <sp-field-label for="object-name">Object name</sp-field-label>
                <sp-textfield id="object-name" placeholder="Value" value={node.data.name}
                    onChange={(e: any) => {
                        dispatch(updateNode({ id: node.id, changes: { name: e.target.value } }));
                    }}
                ></sp-textfield>
            </div>

            <div className='editpanel-content'>
                <sp-field-label for="object-description">Object Description</sp-field-label>
                <sp-textfield id="object-description" multiline grows placeholder="Value" value={node.data.description}
                    onChange={(e: any) => {
                        dispatch(updateNode({ id: node.id, changes: { description: e.target.value } }));
                    }}
                ></sp-textfield>
            </div>

            <div className='editproperty'>
                <sp-accordion density="spacious" quiet size="s" allow-multiple>
                    <sp-accordion-item label="ATTRIBUTES" open>

                        {
                            node.data.attributes.map((attribute, index) => {
                                return (
                                    <EditPropertyContainer key={index} value={attribute.label} onChange={
                                        (e: any) => {
                                            const attributes = [...node.data.attributes];
                                            const newAttributes = [...attributes];
                                            newAttributes[index] = { ...newAttributes[index], label: e.target.value };
                                            dispatch(updateNode({
                                                id: node.id, changes: {
                                                    attributes: newAttributes
                                                }
                                            }));
                                        }
                                    } />
                                );
                            })
                        }

                        <div className='editproperty-button-container'>
                            <sp-action-button onClick={() => {
                                const attributes = [...node.data.attributes];
                                dispatch(updateNode({
                                    id: node.id, changes: {
                                        attributes: [...attributes, { label: "New attribute" }]
                                    }
                                }));
                            }}>
                                <sp-icon-add slot="icon" size="s"></sp-icon-add>
                                Add
                            </sp-action-button>
                        </div>

                    </sp-accordion-item>
                </sp-accordion>


                <sp-accordion density="spacious" quiet size="s" allow-multiple>
                    <sp-accordion-item label="METADATA" open>

                        {
                            node.data.metadata.map((metadata, index) => {
                                return (
                                    <EditPropertyContainer key={index} value={metadata.label} onChange={
                                        (e: any) => {
                                            const metadata = [...node.data.metadata];
                                            const newMetadata = [...metadata];
                                            newMetadata[index] = { ...newMetadata[index], label: e.target.value };
                                            dispatch(updateNode({
                                                id: node.id, changes: {
                                                    metadata: newMetadata
                                                }
                                            }));
                                        }
                                    } />
                                );
                            })
                        }

                        <div className='editproperty-button-container'>
                            <sp-action-button
                                onClick={() => {
                                    const metadata = [...node.data.metadata];
                                    dispatch(updateNode({
                                        id: node.id, changes: {
                                            metadata: [...metadata, { label: "New metadata" }]
                                        }
                                    }));
                                }}
                            >
                                <sp-icon-add slot="icon" size="s"></sp-icon-add>
                                Add
                            </sp-action-button>
                        </div>

                    </sp-accordion-item>
                </sp-accordion>

                <sp-accordion density="spacious" quiet size="s" allow-multiple>
                    <sp-accordion-item label="ACTIONS" open>

                        {
                            node.data.actions.map((action, index) => {
                                return (
                                    <EditPropertyContainer key={index} value={action.label} onChange={
                                        (e: any) => {
                                            const actions = [...node.data.actions];
                                            const newActions = [...actions];
                                            newActions[index] = { ...newActions[index], label: e.target.value };
                                            dispatch(updateNode({ id: node.id, changes: { newActions } }));
                                        }
                                    } />
                                );
                            })
                        }

                        <div className='editproperty-button-container'>
                            <sp-action-button
                                onClick={() => {
                                    const actions = [...node.data.actions];
                                    dispatch(updateNode({
                                        id: node.id, changes: {
                                            actions: [...actions, { label: "New action" }]
                                        }
                                    }));
                                }}
                            >
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