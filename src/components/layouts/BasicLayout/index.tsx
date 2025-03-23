import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import {metadata} from "@/app/layout";
import SideMenu from "@/components/organisms/SideMenu";

type Props = {
    children: React.ReactNode;
    title: string;
    sideMenuId?: string;
};


export default function BasicLayout({children, title, sideMenuId}: Readonly<Props>) {

    // タイトルタグを書き換える
    metadata.title = `${title} | ${process.env.APP_NAME}`;
    
    return (
        <>
            <Header/>
                <main className="content">
                    <p className="font-bold text-3xl">React Hooks 全20種の解説とサンプル</p>
                    <div className="grid grid-cols-5 pt-10">
                        <SideMenu id={sideMenuId} />
                        <div className="col-span-4 px-5">
                            <h1 className="font-bold text-2xl mb-10">{title}</h1>
                            {children}
                        </div>
                    </div>
                </main>
            <Footer/>
        </>
    );
}
