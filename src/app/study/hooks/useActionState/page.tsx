import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useActionState() {
    return (
        <BasicLayout title="16. UseActionState" sideMenuId="useActionState" isNew={true}>
            <SectionTitle title="概要" />
            <p>非同期処理をしたあとの結果でステート更新ができるフック</p>
            <p>利用シーン：フォーム送信、非同期処理</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useTransition + useReducerのような機能で、非同期処理を待っている間はisPendingを利用してローディング画面などをだすことが出来る。<br/>
                そのあと処理が終わったらステートが更新されるので、画面の更新(再レンダリング)が行われます。
            </p>
            <CodeSandbox id="rglsyw" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
