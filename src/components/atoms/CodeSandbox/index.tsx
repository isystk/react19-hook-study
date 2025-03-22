import styles from './styles.module.scss';

type Props = {
    id: string,
    className?: string,
};

const CodeSandbox = ({ id, className }: Props) => {
    return (
        <>
            <iframe src={`https://codesandbox.io/embed/${id}?view=editor+%2B+preview&fontsize=14&hidenavigation=1&theme=dark&view=split&editorsize=70`}
                    className={`${styles.codeSandbox} ${className}`}
                    title="useState"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
            
        </>
    );
};

export default CodeSandbox;

