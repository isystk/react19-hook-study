import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useContext() {
    return (
        <BasicLayout title="04. UseContext" sideMenuId="useContext">
            <SectionTitle title="概要" />
            <p>コンテキスト（グローバルな状態）を利用するフック</p>
            <p>利用シーン：テーマの切り替え、認証情報の管理</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useContext を使うことで、コンポーネント間でデータを簡単に共有できる。<br/>
                Props バケツリレーを避けてグローバルな状態管理を実現する
            </p>
            <CodeSandbox id="l97jm8" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
