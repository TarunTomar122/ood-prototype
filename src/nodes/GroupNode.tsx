import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';


function CustomGroupNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

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