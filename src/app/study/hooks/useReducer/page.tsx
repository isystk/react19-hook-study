import BasicLayout from "@/components/layouts/BasicLayout";
import CodeSandbox from "@/components/atoms/CodeSandbox";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function UseReducer() {
    return (
        <BasicLayout title="03. UseReducer" sideMenuId="useReducer">
            <SectionTitle title="概要" />
            <p>複雑な状態管理を行うためのフック</p>
            <p>利用シーン：大規模なフォーム管理、状態管理ライブラリの代替</p>
            <SectionTitle title="基本的な使い方" className="mt-10" />
            <p>
                useReducer は useState よりも柔軟な状態管理を提供し、アクションを伴う更新を行える。
            </p>
            <CodeSandbox id="cjfk8y" className="mt-10" ></CodeSandbox>
        </BasicLayout>
    );
}
