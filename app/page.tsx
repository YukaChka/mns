"use client";
import Image from "next/image";
import useDownloader from "react-use-downloader";
import { UploadForm } from "@/components/UploadForm";

export default function Home() {
  const { download } = useDownloader();

  const fileUrl = "\\docs\\Phonex_8.0.pdf";

  const filename = fileUrl.split("\\").pop();

  return (
    <main>
      <div>
        <div className="flex justify-center -mt-14">
          <Image
            src="img/megatelonlylogo.svg"
            alt=""
            height={307}
            width={200}
          />
        </div>
        <div className="textmegatel flex justify-center">Мегатель</div>
        <div className="flex justify-center text-bolt font-bold">
          Lorem Ipsum - это текст-рыба, часто используемый в печати и
          вэб-дизайне.
        </div>
        <div className="flex justify-center p-11 ">
          <Image src="img/downarrow.svg" alt="" height={75} width={75} />
        </div>
        <div className="bg-gradient-to-t striped">
          <div className="flex justify-center">
            <div className="max-w-6xl">
              <div className="text-white text-6xl font-bold mt-10">
                Наша компания
              </div>
              <div className="text-white mt-10 text-2xl">
                «Мегатель» — российская компания. Мы являемся специализированным
                поставщиком АСР «ФонексПро», работ по настройке, гарантийной и
                постгарантийной поддержке, адаптации, доработке и обучению
                пользователей — напрямую или при участии интеграторов
              </div>
              <div className="flex justify-center mt-16">
                <Image
                  src="/img/photo.jpg"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t">
          <div className="flex justify-center">
            <div className="max-w-6xl">
              <div className="text-6xl font-bold mt-10">
                Партнёры
              </div>
              <div className=" flex justify-center grid grid-cols-5 gap-4 content-start mt-10">
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                /><Image
                src="/img/i.png"
                alt="qe"
                height={11440}
                width={1741}
              />
              <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
                <Image
                  src="/img/i.png"
                  alt="qe"
                  height={11440}
                  width={1741}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-t bg-[#009CF3] mt-16">
          <div className="flex justify-center">
            <div className="max-w-6xl">
              <div className="text-white text-6xl font-bold mt-10">
                Новости
              </div>
              <div className="text-white mt-10 text-2xl">
                <div className="containerNews mb-14">

                  <div>
                    <div className="text-9xl font-bold flex justify-center">
                      11
                    </div>

                    <div>
                      Cентября
                    </div>

                  </div>

                  <div >
                    <div className="ml-11 font-bold text-3xl">
                    Заголовок
                    </div>
                    <div className="ml-11">
                    Ясность нашей позиции очевидна: сплочённость команды профессионалов играет определяющее значение для дальнейших направлений развития. <nob className="font-bold">Подробнее...</nob>
                    </div>

                  </div>

                </div>
                <div className="containerNews mb-14">

                  <div>
                    <div className="text-9xl font-bold flex justify-center">
                      11
                    </div>

                    <div>
                      Cентября
                    </div>

                  </div>

                  <div >
                    <div className="ml-11 font-bold text-3xl">
                    Заголовок
                    </div>
                    <div className="ml-11">
                    Ясность нашей позиции очевидна: сплочённость команды профессионалов играет определяющее значение для дальнейших направлений развития. <nob className="font-bold">Подробнее...</nob>
                    </div>

                  </div>

                </div>
                <div className="containerNews mb-14">

                  <div>
                    <div className="text-9xl font-bold flex justify-center">
                      11
                    </div>

                    <div>
                      Cентября
                    </div>

                  </div>

                  <div >
                    <div className="ml-11 font-bold text-3xl">
                    Заголовок
                    </div>
                    <div className="ml-11">
                    Ясность нашей позиции очевидна: сплочённость команды профессионалов играет определяющее значение для дальнейших направлений развития. <nob className="font-bold">Подробнее...</nob>
                    </div>

                  </div>

                </div>
                <div className="containerNews mb-14">

                  <div>
                    <div className="text-9xl font-bold flex justify-center">
                      11
                    </div>

                    <div>
                      Cентября
                    </div>

                  </div>

                  <div >
                    <div className="ml-11 font-bold text-3xl">
                    Заголовок
                    </div>
                    <div className="ml-11">
                    Ясность нашей позиции очевидна: сплочённость команды профессионалов играет определяющее значение для дальнейших направлений развития. <nob className="font-bold">Подробнее...</nob>
                    </div>

                  </div>

                </div>
                <div className="containerNews mb-14">

                  <div>
                    <div className="text-9xl font-bold flex justify-center">
                      11
                    </div>

                    <div>
                      Cентября
                    </div>

                  </div>

                  <div >
                    <div className="ml-11 font-bold text-3xl">
                    Заголовок
                    </div>
                    <div className="ml-11">
                    Ясность нашей позиции очевидна: сплочённость команды профессионалов играет определяющее значение для дальнейших направлений развития. <nob className="font-bold">Подробнее...</nob>
                    </div>

                  </div>

                </div>
                
              </div>
              
            </div>
            
          </div>
        </div>
        <div>
                Тех
              </div>

      </div>
    </main>
  );
}
