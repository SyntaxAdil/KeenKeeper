"use client"
import useTimeline from '../../../hooks/useTimeline'

const SortTimeLine = () => {
    const {setSortType}=useTimeline()
  return (
    <fieldset className="fieldset">
      <select defaultValue="sort" className="select outline-0">
        <option disabled={true} value="sort">Sort by Date</option>
        <option onClick={() => setSortType("newest")}>Newest First</option>
        <option onClick={() => setSortType("oldest")}>Oldest First</option>
      </select>
    </fieldset>
  )
}

export default SortTimeLine