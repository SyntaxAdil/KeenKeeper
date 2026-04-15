import Timeline from "./../../components/ui/timeline/Timeline";
import FilterTimeline from "./../../components/ui/timeline/FilterTimeline";
import SortTimeLine from "../../components/ui/timeline/SortTimeLine";
import SerachTimeline from './../../components/ui/timeline/SerachTimeline';

const TimeLinePage = () => {
  return (
    <section className="my-10 max-w-278 mx-auto px-4 ">
      <div>
        <h1 className="text-5xl font-bold mb-4">Timeline </h1>

        {/* select filter */}
        <FilterTimeline />
        <SortTimeLine/>
        <SerachTimeline/>
        {/* Timeline */}
        <Timeline />
      </div>
    </section>
  );
};

export default TimeLinePage;
