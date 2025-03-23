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
    {id: 'useReducer', title: '03. useReducer', url: '/study/hooks/useReducer'},
    {id: 'useContext', title: '04. useContext', url: '/study/hooks/useContext'},
    {id: 'useRef', title: '05. useRef', url: '/study/hooks/useRef'},
    {id: 'useMemo', title: '06. useMemo', url: '/study/hooks/useMemo'},
    {id: 'useCallback', title: '07. useCallback', url: '/study/hooks/useCallback'},
    {id: 'useLayoutEffect', title: '08. useLayoutEffect', url: '/study/hooks/useLayoutEffect'},
    {id: 'useTransition', title: '09. useTransition', url: '/study/hooks/useTransition'},
    {id: 'useDeferredValue', title: '10. useDeferredValue', url: '/study/hooks/useDeferredValue'},
    {id: 'useId', title: '11. useId', url: '/study/hooks/useId'},
    {id: 'useSyncExternalStore', title: '12. useSyncExternalStore', url: '/study/hooks/useSyncExternalStore'},
    {id: 'useDebugValue', title: '13. useDebugValue', url: '/study/hooks/useDebugValue'},
    {id: 'useImperativeHandle', title: '14. useImperativeHandle', url: '/study/hooks/useImperativeHandle'},
    {id: 'useInsertionEffect', title: '15. useInsertionEffect', url: '/study/hooks/useInsertionEffect'},
    {id: 'useActionState', title: '16. useActionState', url: '/study/hooks/useActionState'},
    {id: 'useOptimistic', title: '17. useOptimistic', url: '/study/hooks/useOptimistic'},
    {id: 'useFormState', title: '18. useFormState', url: '/study/hooks/useFormState'},
    {id: 'useFormStatus', title: '19. useFormStatus', url: '/study/hooks/useFormStatus'},
    {id: 'use', title: '20. use', url: '/study/hooks/use'},
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
