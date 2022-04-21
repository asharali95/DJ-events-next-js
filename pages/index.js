import Layout from "../Components/Layout/Layout";
export default function Home({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/events");
  const events = await response.json();
  console.log(events);
  return {
    props: { events },
    revalidate: 1,
  };
}
