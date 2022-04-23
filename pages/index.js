import EventItems from "Components/EventItems/EventItems";
import Layout from "../Components/Layout/Layout";
import Link from "next/Link";
export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events.map((event) => (
        <EventItems key={event.id} event={event} />
      ))}
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn">More events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/events");
  const { events } = await response.json();
  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}
