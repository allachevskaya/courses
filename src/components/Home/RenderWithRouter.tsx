import { ICourse } from '@/interface/courses.interface'
import styles from './Main.module.sass'
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { findUniqueTags } from '@/utils/findUniqueTags';
import { MainCard } from './MainCard';


export const RenderWithRouter = ({ data }: { data: ICourse[] }) => {

    const [currentCourses, setCurrentCourses] = useState<ICourse[]>(data);
    const router = useRouter();
    const { basePath, query } = router
    const uniqueTags = findUniqueTags(data);

    const [curretTag, setCurretTag] = useState<string>('');

    useEffect(() => {
        const tag = query.tag as string;
        if (tag) {
            setCurretTag(tag)
            setCurrentCourses(data.filter((course) => course.tags.includes(tag)))
        } else {
            setCurrentCourses(data)
            setCurretTag('')
        }
    }, [router])


    const renderTag = (tag: string = '') => {
        const replaceTag = (tag: string) => tag === '' ? basePath : `${basePath}?tag=${tag}`;
        return (
            <Link
                href={replaceTag(tag)}
                key={uuidv4()}
                className={clsx({
                    [styles.mainTagsTag]: true,
                    [styles.mainTagsTagActive]: true && (curretTag === tag),
                })}
            >
                {tag === '' ? 'Все темы' : tag}
            </Link>
        )
    };

    return (
        <section className={styles.main}>
            <div className={styles.mainTags}>
                {renderTag()}
                {uniqueTags.map((tag) => renderTag(tag))}
            </div>
            <div className={styles.mainCards}>
                {currentCourses.map((card) => <MainCard key={uuidv4()} card={card} />)}
            </div>
        </section>
    )
}
