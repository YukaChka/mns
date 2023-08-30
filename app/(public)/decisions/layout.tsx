export default function DecisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main>{children}</main>
    </section>
  );
}
