
import Image from "next/image";
export default async function NewsPage() {
  return (
    <main>
          <div className="flex container justify-center">
            <div className="max-w-6xl w-">
              <div className="text-xl font-bold">
                Назад
              </div>
              <div className="grid grid-cols-2 ">
                <div>
                  Создать новость
                </div>
                <div>
                  Вернуться на главную
                </div>
              </div>
              

            </div>
          </div>
    </main>
  );
}
