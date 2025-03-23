import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useDeferredValue() {
    return (
        <BasicLayout title="10. UseDeferredValue" sideMenuId="useDeferredValue">
            <SectionTitle title="概要" />
            <p>値の更新を遅延させ、入力遅延を防ぐフック</p>
            <p>利用シーン：検索フィルタ、入力フォームの最適化</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useDeferredValue を使うことで、入力のスムーズさを維持しつつ、非同期で更新できる。
            </p>
            <CodeSandbox id="xxx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
