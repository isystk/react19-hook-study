import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useRef() {
    return (
        <BasicLayout title="05. UseRef" sideMenuId="useRef">
            <SectionTitle title="概要" />
            <p>値を保持しつつ再レンダリングを発生させないフック</p>
            <p>利用シーン：DOM要素の参照、過去の値の保持</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useRef を使うと、再レンダリングなしで値を維持できるため、パフォーマンスが向上する。
            </p>
            <CodeSandbox id="xxx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
