import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useActionState() {
    return (
        <BasicLayout title="16. UseActionState" sideMenuId="useActionState">
            <SectionTitle title="概要" />
            <p>アクションの状態を管理するフック</p>
            <p>利用シーン：フォーム送信、非同期処理</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useActionState を使うと、非同期アクションの成功・失敗を追跡できる。
            </p>
            <CodeSandbox id="xxx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
