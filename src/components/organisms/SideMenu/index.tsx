import Link from "next/link";
import styles from './styles.module.scss';

type SideMenuItem = {
    title: string;
    url: string;
}

type Props = {
    title: string;
}

const sideMenuItems = [
    {title: '01. useState', url: '/study/hooks/useState'},
    {title: '02. useEffect', url: '/study/hooks/useEffect'},
] as SideMenuItem[];

const SideMenu = ({ title }: Props) => {
    return (
        <div className={styles.sideMenu}>
            <p className={styles.title}>{title}</p>
            <ul>
                {sideMenuItems.map(({ title, url }, index) => (
                    <li key={index} className="mb-2"><Link href={url}>{title}</Link></li>
                ))}
            </ul>
        </div>
    );
};

export default SideMenu;
export type {SideMenuItem};
