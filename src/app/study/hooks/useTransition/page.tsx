import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useTransition() {
    return (
        <BasicLayout title="09. UseTransition" sideMenuId="useTransition">
            <SectionTitle title="概要" />
            <p>状態更新を遅延させ、UIをスムーズにするフック</p>
            <p>利用シーン：重い計算処理中のスムーズなUI更新</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useTransition を使うと、優先度の低い状態更新をスケジュールできる。
            </p>
            <CodeSandbox id="xxx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
