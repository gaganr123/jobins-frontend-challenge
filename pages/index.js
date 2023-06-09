import CardOne from "../components/CardOne";
import CardThree from "../components/CardThree";
import CardTwo from "../components/CardTwo";
import Tabs from "../components/Tab";
import Table from "../components/Table";

export default function Home() {
  return (
    <>
    

      <div className="grid lg:grid-cols-3 gap-5 mb-16 mt-10">
        <div className="rounded-md bg-white h-50 shadow-sm">
          <CardOne/>
        </div>
        <div className="rounded-md bg-white h-50 shadow-sm">
          <CardTwo/>
        </div>
        <div className="rounded-md bg-white h-50 shadow-sm"><CardThree/></div>
      </div>
      <div className="grid col-1 bg-white h-70 shadow-sm mb-10">
        <Tabs/>
      </div>
      <div className="grid col-1 h-70 shadow-sm mb-10">
        <div className="overflow-x-auto">
        <Table/>
        </div>
      
      </div>
    </>
  );
}
