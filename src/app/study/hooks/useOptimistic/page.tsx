import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useOptimistic() {
    return (
        <BasicLayout title="17. UseOptimistic" sideMenuId="useOptimistic">
            <SectionTitle title="概要" />
            <p>楽観的UI更新を管理するフック</p>
            <p>利用シーン：Optimistic UI（即時反映するUI）</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useOptimistic を使うと、リクエスト完了を待たずにUIを更新できる。
            </p>
            <CodeSandbox id="xxx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
