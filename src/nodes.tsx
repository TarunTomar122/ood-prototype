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
                    "Comments",
                    id: "1",
                    checked: false
                }
            ],
            metadata: [
                {
                    label: "Priority",
                    id: "2",
                    checked: false
                }
            ],
            actions: [
                {
                    label: "Edit",
                    id: "3",
                    checked: false
                },
                {
                    label: "Delete",
                    id: "4",
                    checked: false
                },
                {
                    label: "Mark as resolved",
                    id: "5",
                    checked: false
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
                    label: "Comments",
                    id: "1",
                    checked: false
                }
            ],
            metadata: [
                {
                    label: "Priority",
                    id: "2",
                    checked: false
                }
            ],
            actions: [
                {
                    label: "Edit",
                    id: "3",
                    checked: false
                },
                {
                    label: "Delete",
                    id: "4",
                    checked: false
                },
                {
                    label: "Mark as resolved",
                    id: "5",
                    checked: false
                }
            ]
        },
    },
];