
import Timeline from './../../components/ui/timeline/Timeline';

const TimeLinePage = () => {
  return (
    <section className="my-10 max-w-278 mx-auto  ">
      <div>
        <h1 className="text-5xl font-bold mb-4">Timeline </h1>

        {/* select filter */}
        <fieldset className="fieldset">
          <select defaultValue="Filter timeline" className="select outline-0">
            <option  disabled={true}>Filter timeline</option>
            <option>Call</option>
            <option>Text</option>
            <option>Video</option>
          </select>
        </fieldset>
     
     <Timeline/>
      </div>
    </section>
  );
};

export default TimeLinePage;
