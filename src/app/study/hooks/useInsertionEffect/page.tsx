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
                useInsertionEffect を使うと、useLayoutEffectやuseEffectより先にCSSの挿入タイミングを最適化できる。<br/>
                DOMの変更前に実行され、レイアウトの計算前にスタイルを挿入できます。
            </p>
            <CodeSandbox id="rfkghx" className="mt-10" ></CodeSandbox>
        </BasicLayout>
    );
}
