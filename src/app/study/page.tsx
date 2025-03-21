import BasicLayout from "@/components/layouts/BasicLayout";
import SideMenu from "@/components/organisms/SideMenu";

export default function Top() {
    return (
        <BasicLayout title="トップ">
            <h2>React Hooks 全20種の解説とサンプル</h2>
            <div className="grid grid-cols-5 pt-10">
              <SideMenu title="目次" />
              <div className="col-span-4 px-5">
                  <h3>はじめに</h3>
                  <hr/>
                  <div className="py-5">
                  </div>
              </div>
            </div>
        </BasicLayout>
    );
}
