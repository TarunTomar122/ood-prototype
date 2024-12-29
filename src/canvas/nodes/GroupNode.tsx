import { Handle, Position, NodeProps } from '@xyflow/react';

type CustomGroupNodeProps = NodeProps & {
    data: {
        label: string;
    };
};

function CustomGroupNode({ data }: CustomGroupNodeProps) {

    const { label } = data;
    console.log('CustomGroupNode', label);

    return (
        <div style={{ border: '2px black solid', padding: 10, borderRadius: 4, height: '100%' }}>

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
                    height: "10%",
                }}
            />
        </div>
    );
}

export default CustomGroupNode;