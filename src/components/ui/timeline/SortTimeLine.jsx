"use client"
import useTimeline from '../../../hooks/useTimeline'

const SortTimeLine = () => {
    const {setSortType}=useTimeline()
  return (
    <fieldset className="fieldset">
        <label className="text-sm font-semibold  tracking-widest text-gray-400  pb-1">
        Sort Timeline
      </label>
      <select defaultValue="sort" className="select outline-0">
        <option disabled={true} value="sort">Sort by Date</option>
        <option onClick={() => setSortType("newest")}>Newest First</option>
        <option onClick={() => setSortType("oldest")}>Oldest First</option>
      </select>
    </fieldset>
  )
}

export default SortTimeLine