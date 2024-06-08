import Image from 'next/image';
import styles from './Main.module.sass';
import { ICourse } from '@/interface/courses.interface';

export const MainCard = ({
    card: {
        bgColor,
        image,
        name
    }
}: { card: ICourse }) => {
    return (
        <div
            style={{ background: bgColor }}
            className={styles.mainCardsCard}>
            <div className={styles.mainCardsCardImg}>
                <Image
                    src={image}
                    alt={name}
                    width={250}
                    height={250}
                />
            </div>
            <p>{name}</p>
        </div>
    )
}