import Timeline from "./../../components/ui/timeline/Timeline";
import FilterTimeline from "./../../components/ui/timeline/FilterTimeline";
import SortTimeLine from "../../components/ui/timeline/SortTimeLine";
import SerachTimeline from "./../../components/ui/timeline/SerachTimeline";
import TimelineAction from "../../components/ui/timeline/TimelineAction";

const TimeLinePage = () => {
  return (
    <section className="my-10 max-w-278 mx-auto px-4 ">
      <div>
        <div className="flex items-center justify-between mb-6 ">
          <h1 className="text-4xl md:text-5xl font-bold ">Timeline </h1>
          <TimelineAction />
        </div>
        {/* filter ,sorting,search*/}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0  ">
          <FilterTimeline />
          <SortTimeLine />
          <div className="col-span-2 order-1 md:col-span-1">
            <SerachTimeline />
          </div>
        </div>
        {/* Timeline */}
        <Timeline />
      </div>
    </section>
  );
};

export default TimeLinePage;
