export default function DecisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main>
        <div className=" flex container justify-start">
        <div className="max-w-6xl ">
          <div className="mt-10 text-4xl font-bold">
          Решения
          </div>
        
  
        
        <div>
        {children}
        </div>
        </div>
        </div>
        </main>
    </section>
  );
}
