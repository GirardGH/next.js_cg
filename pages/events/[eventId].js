import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  return (
    <div>
      {event ? (
        <Fragment>
          <EventSummary title={event.title} />
          <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
          />
          <EventContent>
            <p>{event.description}</p>
          </EventContent>
        </Fragment>
      ) : (
        <p>No event found !</p>
      )}
    </div>
  );
}

export default EventDetailPage;
