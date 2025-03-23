import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useId() {
    return (
        <BasicLayout title="11. UseId" sideMenuId="useId">
            <SectionTitle title="概要" />
            <p>ユニークなIDを生成するフック</p>
            <p>利用シーン：アクセシビリティ向上（ラベルとフォームの関連付け）</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useId を使うと、コンポーネント間で一意なIDを安全に生成できる。
            </p>
            <CodeSandbox id="fdpd4w" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
