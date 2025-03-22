import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import {metadata} from "@/app/layout";

type Props = {
    children: React.ReactNode;
    title: string;
};


export default function BasicLayout({children, title}: Readonly<Props>) {

    // タイトルタグを書き換える
    metadata.title = `${title} | ${process.env.APP_NAME}`;
    
    return (
        <>
            <Header/>
                <main className="content">
                    <h2>{title}</h2>
                    {children}
                </main>
            <Footer/>
        </>
    );
}
