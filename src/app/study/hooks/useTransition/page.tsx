import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useTransition() {
    return (
        <BasicLayout title="09. UseTransition" sideMenuId="useTransition" >
            <SectionTitle title="概要" />
            <p>優先度の低い状態更新を遅延させ、UIをスムーズにするフック</p>
            <p>利用シーン：重い計算処理中のスムーズなUI更新。ページネーションの切り替えや検索処理、タブの切り替え</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useTransition を使うと、優先度の低い状態更新をスケジュールできる。<br/>
                処理に時間がかかる検索などは、検索している途中ユーザーが操作しても画面が反応しなくなってしまいユーザー体験が落ちてしまうので、<br/>
                検索処理の優先度をuseTransitionで落とすことでUXを向上できる。
            </p>
            <CodeSandbox id="2jc6fg" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
