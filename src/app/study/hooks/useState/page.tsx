import BasicLayout from "@/components/layouts/BasicLayout";
import SideMenu from "@/components/organisms/SideMenu";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function UseState() {
    return (
        <BasicLayout title="01. UseState">
            <div className="grid grid-cols-5 pt-10">
                <SideMenu id="useState" />
                <div className="col-span-4 px-5">
                    <SectionTitle title="概要" />
                    <p>状態(State)を管理するための最も基本的なフック</p>
                    <SectionTitle title="基本的な使い方" className="mt-10" />
                    <p>
                        useStateを使って状態管理をすると、ステートが変更される度に再レンダリングが行われて画面が更新します。
                    </p>
                    <CodeSandbox id="tx3f8k" className="mt-10"  ></CodeSandbox>
                </div>
            </div>
        </BasicLayout>
    );
}
