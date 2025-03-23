import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useFormStatus() {
    return (
        <BasicLayout title="19. UseFormStatus" sideMenuId="useFormStatus">
            <SectionTitle title="概要" />
            <p>フォームの送信状態を取得するフック</p>
            <p>利用シーン：送信中のボタン無効化、ローディング表示</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useFormStatus を使うと、送信中の状態をリアルタイムで取得できる。
            </p>
            <CodeSandbox id="xxx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
