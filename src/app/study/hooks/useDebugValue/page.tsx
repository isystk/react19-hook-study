import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";
import Image from '@/components/atoms/Image';

export default function useDebugValue() {
    return (
        <BasicLayout title="13. UseDebugValue" sideMenuId="useDebugValue">
            <SectionTitle title="概要" />
            <p>React DevToolsでデバッグ情報を表示するフック</p>
            <p>利用シーン： カスタムフックのデバッグ</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useDebugValue を使うと、デバッグしやすい情報を出力できる。<br/>
                <a href="https://9qsrpc.csb.app" target="_blank" rel="noopener noreferrer">サンプル画面を開く</a>
            </p>
            <Image src="/images/sample-useDebugValue.png" width={1396} height={517} alt="sample-useDebugValue" />
            <CodeSandbox id="9qsrpc" className="mt-10" ></CodeSandbox>
        </BasicLayout>
    );
}
