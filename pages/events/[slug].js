import Layout from "../../Components/Layout/Layout";

export default function EventPage({ evt }) {
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/events`);
  const { events } = await res.json();
  const paths = events.map(({ slug }) => ({
    params: { slug: slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`http://localhost:3000/api/events/${slug}`);
  const { event } = await res.json();
  return {
    props: { evt: event[0] },
  };
}
