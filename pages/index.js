import EventItems from "Components/EventItems/EventItems";
import Layout from "../Components/Layout/Layout";
export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events.map((event) => (
        <EventItems key={event.id} event={event} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/events");
  const { events } = await response.json();
  return {
    props: { events },
  };
}
