import { Node } from '@xyflow/react';

export const singleNode: Node[] = [
    {
        id: 'A',
        type: 'card',
        position: { x: 0, y: 0 },
        data: {
            attributes: [
                {
                    label: "Comments"
                }
            ],
            metadata: [
                {
                    label: "Priority"
                }
            ],
            actions: [
                {
                    label: "Edit"
                },
                {
                    label: "Delete"
                },
                {
                    label: "Mark as resolved"
                }
            ]
        },
    },
    {
        id: 'B',
        type: 'card',
        position: { x: 600, y: 0 },
        data: {
            attributes: [
                {
                    label: "Comments"
                }
            ],
            metadata: [
                {
                    label: "Priority"
                }
            ],
            actions: [
                {
                    label: "Edit"
                },
                {
                    label: "Delete"
                },
                {
                    label: "Mark as resolved"
                }
            ]
        },
    },
];