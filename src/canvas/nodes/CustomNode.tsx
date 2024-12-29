import { Handle, Position, NodeProps } from '@xyflow/react';

type TextUpdaterNodeProps = NodeProps & {
    data: {
        label: string;
    };
};

function TextUpdaterNode({ data }: TextUpdaterNodeProps) {
    const { label } = data;
    return (
        <div style={{ border: '2px black solid', padding: 10, borderRadius: 4, height: '100%' }}>
            <div>
                Hello I am a custom node with label: {label}
            </div>

            <Handle type="source" position={Position.Left} id="a" style={{
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
            />
        </div>
    );
}

export default TextUpdaterNode;