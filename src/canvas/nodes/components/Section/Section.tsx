import '@spectrum-web-components/icons-workflow/icons/sp-icon-info-circle.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-add.js';

import './styles.css';

import SectionRow, { SectionRowProps } from '../SectionRow/SectionRow';

import { useEffect, useState } from 'react';

interface SectionProps {
    rows: SectionRowProps[];
    label: string;
    addRow: () => void;
    onChange: (rows: SectionRowProps[]) => void;
}

export default function Section(props: SectionProps) {

    const [rows, setRows] = useState<SectionRowProps[]>(props.rows);

    useEffect(() => {
        setRows(props.rows);
    }, [props.rows]);

    return (
        <section className='content'>

            <div className='content-header'>
                <p className='section-title'>{props.label}</p>
                <div className="section-icon" onClick={() => props.addRow()}>
                    <sp-icon-add size="m"></sp-icon-add>
                </div>
            </div>

            <section className='section-content'>

                {rows.map((row, index) => (
                    <SectionRow key={index} {...row} />
                ))}

            </section>

        </section>

    )
}