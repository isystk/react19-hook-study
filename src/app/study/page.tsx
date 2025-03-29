import BasicLayout from "@/components/layouts/BasicLayout";
import SectionTitle from "@/components/atoms/SectionTitle";
import Image from '@/components/atoms/Image';

export default function StudyHooks() {
    return (
        <BasicLayout title="はじめに" sideMenuId="first">
            <p>
                Reactを勉強するとまず最初に勉強するのがuseStateなどのHooksだったと思います。<br/>
                useStateやuseEffectなどは利用する場面が多く慣れている方も多いと思いますが、その他のHooksはどうでしょうか？そもそも名前すら知らないというHooksがたくさんあるかと思います。<br/>
                その中には利用することでパフォーマンスを向上させたり、ステートを簡単に扱えるようになるものなど便利なものがたくさん用意されています。<br/>
                React19の登場でuseActionStateやuseOptimisticなど絶対に覚えて活用していきたい重要なHooksも登場しております。<br/>
                最後まで読めばどのタイミングでどのHooksを選択すればよいかわかるようになるので、よりReactを使いこなせるようになり差別化できるかと思います。
            </p>
            <SectionTitle title="対象者"className="mt-10" />
            <ul>
                <li>Reactを勉強し始めた方</li>
                <li>もっとReactを深く理解したい方</li>
                <li>新しいHooksを理解したい方</li>
                <li>短時間で学びたい方</li>
            </ul>
            <SectionTitle title="React Hooksの全体像"className="mt-10" />
            <Image src="/images/react-hooks-map.png" width={1211} height={672} alt="react-hooks-map" />
        </BasicLayout>
    );
}
