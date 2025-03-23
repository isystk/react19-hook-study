import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useDebugValue() {
    return (
        <BasicLayout title="13. UseDebugValue" sideMenuId="useDebugValue">
            <SectionTitle title="概要" />
            <p>React DevToolsでデバッグ情報を表示するフック</p>
            <p>利用シーン： カスタムフックのデバッグ</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useDebugValue を使うと、デバッグしやすい情報を出力できる。
            </p>
            <CodeSandbox id="9qsrpc" className="mt-10" ></CodeSandbox>
        </BasicLayout>
    );
}
