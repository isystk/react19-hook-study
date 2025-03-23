import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useEffect() {
    return (
        <BasicLayout title="02. UseEffect" sideMenuId="useEffect">
            <SectionTitle title="概要" />
            <p>副作用（データ取得やイベント処理など）を実行するフック</p>
            <p>利用シーン：APIリクエスト、イベントリスナーの登録・解除<br/><span className="text-red-600">(現在ではuseEffectの利用は避けた方が良いです)</span></p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useEffect を使うことで、コンポーネントのマウント・アンマウント・更新時に処理を実行できる。
            </p>
            <CodeSandbox id="useeffect-79t3sx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
