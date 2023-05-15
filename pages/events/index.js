import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

function AllEventsPage() {
  const router = useRouter();

  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
