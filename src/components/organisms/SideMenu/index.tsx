import Link from "next/link";
import styles from './styles.module.scss';

type SideMenuItem = {
    id: string;
    title: string;
    url: string;
}

type Props = {
    id?: string;
}

const sideMenuItems = [
    {id: 'first', title: 'はじめに', url: '/study'},
    {id: 'useState', title: '01. useState', url: '/study/hooks/useState'},
    {id: 'useEffect', title: '02. useEffect', url: '/study/hooks/useEffect'},
] as SideMenuItem[];

const SideMenu = ({ id }: Props) => {
    return (
        <div className={styles.sideMenu}>
            <p className={styles.title}>目次</p>
            <ul>
               {sideMenuItems.map(({ id: itemId, title, url }) => (
                    <li key={itemId} className="mb-2">
                        {id === itemId ? (
                            <span >{title}</span>
                        ) : (
                            <Link href={url}>{title}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideMenu;
export type {SideMenuItem};
