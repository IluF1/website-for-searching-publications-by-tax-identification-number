import React from "react"
import { Link } from 'react-router-dom'
import { TArticle } from "../../utils/types/types"
import st from '../Main/Main.module.scss'
import s from './ArticleCard.module.scss'

type TProps = {
    id: number
} & TArticle

export default function ArticleCard({ok, id}: TProps) {

    const xmlString = ok.content.markup;
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlString, 'text/xml');

    const date = new Date(ok.issueDate);

    let paragraph = '';
    const paragraphTags = doc!.documentElement!.textContent!;

    for (let i = 0; i < paragraphTags.length; i++) {
        const newText = paragraphTags[i]
        paragraph += newText
    }

    const clearText = paragraph.replace(/<\/?[^>]+(>|$)/g, "");

    return (
        <div className={s.root}>
            <div className={s.sourceContainer}>
                <span>{date.toLocaleDateString('ru-Ru')}</span>
                <span className={s.source}>{ok.source.name}</span>
            </div>
            <h2 className={s.title}>{ok.title.text}</h2>
            <div className={s.categoryContainer}>
                            <span className={s.category}>
                                {ok.attributes.isTechNews ? 'Tech news' :
                                    ok.attributes.isDigest ? 'Announcement' :
                                        ok.attributes.isAnnouncement ? 'Digest' :
                                            'Miscellaneous'
                                }
                            </span>
            </div>
            <img className={s.articleImage} src={ok.url} alt=''/>
            <p className={s.paragraph}>{clearText}</p>
            <div className={s.cardFooter}>
                <button className={st.readSourceButton}>
                    <Link to={ok.url} target="_blank">
                        Go to the source
                    </Link>
                </button>
                <span className={s.wordCount}>{ok.attributes.wordCount} words</span>
            </div>
        </div>
    )
}