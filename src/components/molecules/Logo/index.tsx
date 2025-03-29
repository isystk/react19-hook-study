import styles from './styles.module.scss';
import Image from '@/components/atoms/Image';
import {APP_NAME} from "@/constants/app";

export type Props = object

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Image src="/images/github-mark-white.svg" width={30} height={30} alt="Logo" />
            <p>{APP_NAME}</p>
        </div>
    );
};

export default Logo;

