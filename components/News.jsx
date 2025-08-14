"use client";
import { DATANOTICIAS } from "@/data/data";
import Image from "next/image";
import { useSelector } from "react-redux";



const News = () => {


//  const randomNews = DATANOTICIAS.sort(() => Math.random() - 0.5).slice(0, 4)

 const randomNews = useSelector((state) => state.noticias.noticias);
 console.table(randomNews);

  return (
    <div className="flex-1 bg-color2 container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {randomNews?.map((news, i) => (
        <div
          key={i}
          className="border border-color5 rounded overflow-hidden shadow hover:shadow-lg transition"
        >
          <Image
            src="/1.jpg"
            alt={news.titulo}
            width={250}
            height={250}
            className="w-full object-cover p-2 sm:p-1 rounded"
          />
          <div className="p-3 sm:p-4">
            <h2 className="text-base sm:text-lg font-semibold">{news.title}</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
              Resumen breve de la noticia para el usuario.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News