export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="">
        {children}
        </main>
    </section>
  );
}
