import BasicLayout from "@/components/layouts/BasicLayout";
import SideMenu from "@/components/organisms/SideMenu";

export default function Top() {
    return (
        <BasicLayout title="React Hooks 全20種の解説とサンプル">
            <div className="grid grid-cols-5 pt-10">
              <SideMenu id="first" />
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
