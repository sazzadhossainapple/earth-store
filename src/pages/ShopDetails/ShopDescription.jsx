import React from 'react';

const ShopDescription = () => {
    const descrtiption = [
        {
            id: '1',
            title: 'Paper Type: Matte',
            desc: [
                '17.5 pt thickness / 120 lb weight / 324 GSM',
                'Light white, uncoated matte finish with an eggshell texture',
                'Paper is easy to write on and won’t smudge',
                'Made and printed in the USA',
            ],
        },
        {
            id: '2',
            title: 'Paper Type: Semi-Gloss',
            desc: [
                '12.5 pt thickness / 110 lb weight',
                'Bright white, semi-gloss finish',
                '50% recycled content',
                'FSC certified',
                'Paper imported from Italy; printed in the USA',
            ],
        },
    ];
    return (
        <div>
            {descrtiption.map((data) => (
                <div key={data.id} className="shop-details-desc">
                    <p className="shop-dec-title">
                        <strong>{data.title}</strong>
                    </p>
                    <ul className="shop-list-content">
                        {data.desc.map((descData, i) => (
                            <li key={i}>{descData}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="shop-details-desc note-text d-flex  gap-1">
                <strong>Note:</strong>
                <span style={{ fontStyle: 'italic' }}>
                    There may be a slight difference in actual color, due to the
                    colors of display.
                </span>
            </div>
        </div>
    );
};

export default ShopDescription;
