import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function useImperativeHandle() {
    return (
        <BasicLayout title="14. UseImperativeHandle" sideMenuId="useImperativeHandle">
            <SectionTitle title="概要" />
            <p>子コンポーネントのrefで公開する値をカスタマイズするためのフック</p>
            <p>
                利用シーン： モーダルの制御、外部APIの操作<br/>
                <span className="text-red-600">(React19以降を利用している場合は普通にrefを渡せるので不要)</span>
            </p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useImperativeHandle を使うと、カスタムメソッドを提供できる。
            </p>
            <CodeSandbox id="5dmp86" className="mt-10"  ></CodeSandbox>
        </BasicLayout>
    );
}
