import styles from './styles.module.scss';
import Image from '@/components/atoms/Image';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export type Props = object


const Logo = () => {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
    return (
        <div className={styles.logo}>
            <Image src={`${basePath}/images/github-mark-white.svg`} width={30} height={30} alt="Logo" />
            <h1>{process.env.APP_NAME}</h1>
        </div>
    );
};

export default Logo;

