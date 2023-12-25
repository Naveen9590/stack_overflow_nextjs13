export default function Page({ params }: { params: { name: string } }) {
  return (
    <main>
      <h1>{params.name}</h1>
    </main>
  );
}
