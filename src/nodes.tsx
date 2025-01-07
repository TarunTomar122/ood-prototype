import { CardProps } from './canvas/nodes/Card';

export const singleNode: CardProps[] = [
    {
        id: 'A',
        type: 'card',
        position: { x: 0, y: 0 },
        data: {
            name: 'Object name',
            description: 'Object description',
            attributes: [
                {
                    label: 
                    "Comments"
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
            name: 'Object name',
            description: 'Object description',
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