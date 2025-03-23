import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useMemo() {
    return (
        <BasicLayout title="06. UseMemo" sideMenuId="useMemo">
            <SectionTitle title="概要" />
            <p>計算結果をメモ化し、不要な再計算を防ぐフック</p>
            <p>利用シーン：パフォーマンス最適化、重い計算処理</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useMemo を使うと、依存関係が変わらない限り、前回の計算結果を再利用できる。
            </p>
            <CodeSandbox id="xxx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
