import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useMemo() {
    return (
        <BasicLayout title="06. UseMemo" sideMenuId="useMemo">
            <SectionTitle title="概要" />
            <p>計算結果をメモ化し、不要な再計算を防ぐフック</p>
            <p>
                利用シーン：パフォーマンス最適化、重い計算処理<br/>
                <span className="text-red-600">(React19以降を利用している場合は不要)</span>
            </p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useMemo を使うと、依存関係が変わらない限り、前回の計算結果がキャッシュされて再利用できる。<br/>
                React19以降は自動的にメモ化される為、明示的な使用は不要となる。
            </p>
            <CodeSandbox id="s7zrg2" className="mt-10" ></CodeSandbox>
        </BasicLayout>
    );
}
