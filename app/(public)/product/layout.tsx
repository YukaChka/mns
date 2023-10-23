export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main>
        <div className=" flex container justify-start">
          <div className="container ">
            <div className="max-w-6xl ">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
