import styles from './styles.module.scss';
import Image from '@/components/atoms/Image';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export type Props = object

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Image src="/images/github-mark-white.svg" width={30} height={30} alt="Logo" />
            <p>{publicRuntimeConfig.APP_NAME}</p>
        </div>
    );
};

export default Logo;

