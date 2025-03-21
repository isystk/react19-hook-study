import styles from './styles.module.scss';
import Logo from "@/components/molecules/Logo";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    );
};

export default Header;
