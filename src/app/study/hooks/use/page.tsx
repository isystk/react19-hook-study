import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function use() {
    return (
        <BasicLayout title="20. Use" sideMenuId="use">
            <SectionTitle title="概要" />
            <p>Promise の値を取得するフック</p>
            <p>利用シーン：サーバーコンポーネントでのデータ取得</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                use を使うと、非同期データを簡単に取得できる（React Server Components 向け）。
            </p>
            <CodeSandbox id="xxx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
