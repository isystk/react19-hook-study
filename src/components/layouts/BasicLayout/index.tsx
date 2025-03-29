import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import {metadata} from "@/app/layout";
import SideMenu from "@/components/organisms/SideMenu";
import Icon from "@/components/atoms/Icon";
import {APP_NAME} from "@/constants/app";

type Props = {
    children: React.ReactNode;
    title: string;
    sideMenuId?: string;
    isNew?: boolean;
};


export default function BasicLayout({children, title, sideMenuId, isNew = false}: Readonly<Props>) {

    // タイトルタグを書き換える
    metadata.title = `${title} | ${APP_NAME}`;
    
    return (
        <>
            <Header/>
                <main className="content">
                    <p className="font-bold text-3xl">React Hooks 全20種の解説とサンプル</p>
                    <div className="grid grid-cols-5 pt-10">
                        <SideMenu id={sideMenuId} />
                        <div className="col-span-4 px-5">
                            <div className="flex items-center mb-5">
                                <h1 className="font-bold text-2xl">{title}</h1>
                                {isNew && <Icon text="新機能" className="" />}
                            </div>
                            {children}
                        </div>
                    </div>
                </main>
            <Footer/>
        </>
    );
}
