import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useFormState() {
    return (
        <BasicLayout title="18. UseFormState" sideMenuId="useFormState">
            <SectionTitle title="概要" />
            <p>フォームの状態を管理するフック</p>
            <p>利用シーン：useFormStatus と連携し、フォームのエラーハンドリング</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useFormState を使うと、フォームの状態を効率的に管理できる。
            </p>
            <CodeSandbox id="39p9sk" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
