import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  return (
    <div>
      {event ? (
        <div>
          <h1>Event Detail</h1>
        </div>
      ) : (
        <p>No event found !</p>
      )}
    </div>
  );
}

export default EventDetailPage;
