export default function DecisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main>
        <div className=" container">
          <div className=" container flex justify-start">
            <div className="max-w-6xl ">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
