import React from "react"
import { ImgSource } from "../../utils/types/types"
import s from './Card.module.scss'

export default function Card({src, text}: ImgSource) {
    return (
        <div className={s.root}>
            <img className={s.card} src={src} alt=''/>
            <p>{text}</p>
        </div>
    )
}