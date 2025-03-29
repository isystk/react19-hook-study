import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function use() {
    return (
        <BasicLayout title="20. Use" sideMenuId="use" isNew={true}>
            <SectionTitle title="概要" />
            <p>Promise の値を取得するフック</p>
            <p>利用シーン：サーバーコンポーネントでのデータ取得</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                use を使うと、非同期データを簡単に取得できる（React Server Components 向け）。<br/>
                useStateやuseEffectなどを利用せずにデータ取得ができます。ただしローディング状態を把握することができないのでSuspenseと利用するの良いでしょう<br/>
                use はサーバーコンポーネント でのみ使用可能です。
            </p>
            <p className="mt-10">
                ※ 以下のサンプルはクライアントコンポーネントなので動作しません。
            </p>
            <CodeSandbox id="9ynp2c" ></CodeSandbox>
        </BasicLayout>
    );
}
