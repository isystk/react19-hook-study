import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useInsertionEffect() {
    return (
        <BasicLayout title="15. UseInsertionEffect" sideMenuId="useInsertionEffect">
            <SectionTitle title="概要" />
            <p>CSSの適用を最適化するフック</p>
            <p>利用シーン： スタイリングライブラリのパフォーマンス改善</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useInsertionEffect を使うと、CSSの挿入タイミングを最適化できる。
            </p>
            <CodeSandbox id="xxx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
