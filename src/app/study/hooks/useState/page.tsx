import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useState() {
    return (
        <BasicLayout title="01. UseState" sideMenuId="useState">
            <SectionTitle title="概要" />
            <p>状態(State)を管理するための最も基本的なフック</p>
            <p>利用シーン：フォーム入力、カウンター、ボタンの切り替え</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useState を使って状態管理をすると、ステートが変更される度に再レンダリングが行われ、画面が更新される。
            </p>
            <CodeSandbox id="tx3f8k" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
