export default function Page({ data }: { data: any }) {
  return (
    <div>
      <h1> This is about page</h1>
      {data.map((post: any) => (
        <>
          <p>{post.title}</p>
          <br />
          <p>{post.body}</p>
        </>
      ))}
    </div>
  );
}
// Server side rendering
// export async function getServerSideProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();

//   return {
//     props: { data },
//   };
// }

// ISR

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: { data },
    revalidate: 60,
  };
}
