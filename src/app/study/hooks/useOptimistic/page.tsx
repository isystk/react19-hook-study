import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useOptimistic() {
    return (
        <BasicLayout title="17. UseOptimistic" sideMenuId="useOptimistic" isNew={true}>
            <SectionTitle title="概要" />
            <p>楽観的UI更新を管理するフック</p>
            <p>利用シーン：即時反映するUI</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                楽観的更新とはユーザーのアクション結果を即座に画面に反映して、あとから実際の処理を行うことでUXを向上させるアプローチです。<br/>
                useOptimistic を使うと、リクエスト完了を待たずにUIを更新できる。
            </p>
            <CodeSandbox id="useoptimistic-6r9pt4" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
