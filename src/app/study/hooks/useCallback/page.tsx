import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useCallback() {
    return (
        <BasicLayout title="07. UseCallback" sideMenuId="useCallback">
            <SectionTitle title="概要" />
            <p>関数をメモ化し、不要な再生成を防ぐフック</p>
            <p>利用シーン：子コンポーネントへのコールバック関数の渡し方最適化</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useCallback を使うことで、関数が不要に再生成されるのを防ぎ、パフォーマンスを向上させる。
            </p>
            <CodeSandbox id="xxx" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
