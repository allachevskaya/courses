import { ICourse } from '@/interface/courses.interface'
import styles from '../Main.module.sass'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import clsx from 'clsx';
import { findUniqueTags } from '@/utils/findUniqueTags';
import { MainCard } from '../MainCard';


export const MainDefault = ({ data }: { data: ICourse[] }) => {

    const [currentCourses, setCurrentCourses] = useState<ICourse[]>(data);
    const [curretTag, setCurretTag] = useState<string | null>(null);
    const uniqueTags = findUniqueTags(data);


    const renderTag = (tag: string | null = null) => {

        const filterCouses = (tag: string) => {
            setCurrentCourses(data.filter((course) => course.tags.includes(tag)))
        };

        const handleOnClick = () => {
            setCurretTag(tag)
            tag ? filterCouses(tag) : setCurrentCourses(data);
        }
        return (
            <div
                key={uuidv4()}
                onClick={handleOnClick}
                className={clsx({
                    [styles.mainTagsTag]: true,
                    [styles.mainTagsTagActive]: true && tag === curretTag,
                })}
            >
                {tag ?? 'Все темы'}
            </div>
        )
    };

    return (
        <section className={styles.main}>

            <div className={styles.mainTags}>
                {renderTag()}
                {uniqueTags.map((tag) => renderTag(tag))}
            </div>
            <div className={styles.mainCards}>
                {currentCourses.map((card) =>
                    <MainCard key={uuidv4()} card={card} />
                )}
            </div>
        </section>
    )
}
