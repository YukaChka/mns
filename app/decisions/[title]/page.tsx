type DecisionProps = {
  params: {
    title: string;
  };
};

export default async function Decision({ params: { title } }: DecisionProps) {
  return (
    <main>
      <p>Decision {title}</p>
    </main>
  );
}
