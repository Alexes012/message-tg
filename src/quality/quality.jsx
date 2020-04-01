import React from "react";
import s from './quality.module.css'

const QualityItem = (props) => {
    return <div className={s.items}>{props.qualitys}</div>
};

const Quality = (props) => {

    let QualityData = [
        {quality: 'Юморист'},
        {quality: 'Программист'},
        {quality: 'Пофигист'}
    ];

    let QualityElements = QualityData
        .map ((quality, i) =>
            <span className={i === 1 ? s.yo : s.yoyo}>
                <QualityItem qualitys={quality.quality}/>
            </span>);

    console.log(QualityElements)
    return (
        <div className={s.quality}>
            {QualityElements}
        </div>
    )
};

export default Quality;