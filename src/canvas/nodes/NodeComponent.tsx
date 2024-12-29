import { Handle, Position, NodeProps } from '@xyflow/react';

import './node.css';

import EditableLabel from '../../components/EditableLabel/EditableLabel';
import EditableCheckbox from '../../components/EditableCheckbox/EditableCheckbox';

import '@spectrum-web-components/icons-workflow/icons/sp-icon-info-circle.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-add.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-menu-hamburger.js';

import '@spectrum-web-components/checkbox/sp-checkbox.js';

type NodeComponentProps = NodeProps & {
    data: {
        label: string;
    };
};

function NodeComponent({ data }: NodeComponentProps) {
    const { label } = data;
    console.log('label', label);
    return (
        <div className='card'>

            <div className='header'>
                <EditableLabel value="Object name" spanClassName='header-title' inputClassName='header-input' />
                <sp-icon-info-circle size="m"></sp-icon-info-circle>
            </div>

            {/** Attributes */}

            <section className='content'>

                <div className='content-header'>
                    <p className='section-title'>Attributes</p>
                    <div className="section-icon">
                        <sp-icon-add size="m"></sp-icon-add>
                    </div>
                </div>

                <section className='section-content'>

                    <div className='content-row'>
                        <sp-icon-menu-hamburger size="m"></sp-icon-menu-hamburger>

                        <EditableCheckbox value="Name" spanClassName='checkbox-title' inputClassName='checkbox-input' />
                        {/* <sp-checkbox size="l">Comments</sp-checkbox> */}
                        <Handle
                            type="target"
                            position={Position.Left}
                            id="Comments"
                            className="left-connector"
                        />
                        <Handle
                            type="source"
                            position={Position.Right}
                            id="Comments"
                            className="right-connector"
                        />
                    </div>

                </section>

            </section>

            {/** Metadata */}

            <section className='content'>

                <div className='content-header'>
                    <p className='section-title'>Metadata</p>
                    <div className="section-icon">
                        <sp-icon-add size="m"></sp-icon-add>
                    </div>
                </div>

                <section className='section-content'>

                    <div className='content-row'>
                        <sp-icon-menu-hamburger size="m"></sp-icon-menu-hamburger>
                        <sp-checkbox size="l">N/A</sp-checkbox>
                        <Handle
                            type="target"
                            position={Position.Left}
                            id="N/A"
                            className="left-connector"
                        />
                        <Handle
                            type="source"
                            position={Position.Right}
                            id="N/A"
                            className="right-connector"
                        />
                    </div>

                </section>

            </section>

            {/** Actions */}

            <section className='content'>

                <div className='content-header'>
                    <p className='section-title'>Actions</p>
                    <div className="section-icon">
                        <sp-icon-add size="m"></sp-icon-add>
                    </div>
                </div>

                <section className='section-content'>

                    <div className='content-row'>
                        <sp-icon-menu-hamburger size="m"></sp-icon-menu-hamburger>
                        <sp-checkbox size="l">Add comment</sp-checkbox>
                        <Handle
                            type="target"
                            position={Position.Left}
                            id="Add comment"
                            className="left-connector"
                        />
                        <Handle
                            type="source"
                            position={Position.Right}
                            id="Add comment"
                            className="right-connector"
                        />
                    </div>


                    <div className='content-row'>
                        <sp-icon-menu-hamburger size="m"></sp-icon-menu-hamburger>
                        <sp-checkbox size="l">Delete</sp-checkbox>
                        <Handle
                            type="target"
                            position={Position.Left}
                            id="Delete"
                            className="left-connector"
                        />
                        <Handle
                            type="source"
                            position={Position.Right}
                            id="Delete"
                            className="right-connector"
                        />
                    </div>


                    <div className='content-row'>
                        <sp-icon-menu-hamburger size="m"></sp-icon-menu-hamburger>
                        <sp-checkbox size="l">Mark as resolved</sp-checkbox>
                        <Handle
                            type="target"
                            position={Position.Left}
                            id="Mark as resolved"
                            className="left-connector"
                        />
                        <Handle
                            type="source"
                            position={Position.Right}
                            id="Mark as resolved"
                            className="right-connector"
                        />
                    </div>

                </section>

            </section>

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

export default NodeComponent;