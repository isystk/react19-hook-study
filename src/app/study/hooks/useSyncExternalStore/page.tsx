import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useSyncExternalStore() {
    return (
        <BasicLayout title="12. UseSyncExternalStore" sideMenuId="useSyncExternalStore">
            <SectionTitle title="概要" />
            <p>外部ストアと同期するためのフック</p>
            <p>利用シーン： グローバルストアのデータ管理、ブラウザAPIから画面サイズを取得</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useSyncExternalStore を使うと、外部の状態管理ライブラリ（Redux など）と同期を取れる。<br/>
                Reduxなどを利用しないとなかなか使う機会は少ないが、 ブラウザAPIを使って画面サイズを取得することなどには利用されることがある。
            </p>
            <CodeSandbox id="p5yn6f" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
