import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useLayoutEffect() {
    return (
        <BasicLayout title="08. UseLayoutEffect" sideMenuId="useLayoutEffect">
            <SectionTitle title="概要" />
            <p>DOMが更新された直後に同期的に副作用を実行するフック</p>
            <p>利用シーン：レイアウト調整、スクロール位置の変更</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useEffect よりも早く実行され、DOM変更の影響を最小限にできる。
            </p>
            <CodeSandbox id="zf9tlz" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
