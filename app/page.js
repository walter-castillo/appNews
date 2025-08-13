import Image from "next/image";

// app/page.js
export default function Home() {
  const categories = ["Política", "Deportes", "Tecnología", "Cultura", "Economía", "Tecnologia"];
  const randomNews = [
    { title: "Noticia 1", image: "/img1.jpg" },
    { title: "Noticia 2", image: "/img2.jpg" },
    { title: "Noticia 3", image: "/img3.jpg" },
    { title: "Noticia 4", image: "/img4.jpg" },
    { title: "Noticia 5", image: "/img1.jpg" },
    { title: "Noticia 6", image: "/img2.jpg" },
    { title: "Noticia 7", image: "/img3.jpg" },
    { title: "Noticia 8", image: "/img4.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero principal */}
      <section className="relative w-full h-[250px] sm:h-[400px] overflow-hidden rounded-lg">
        <Image
          src="/portada.jpg"
          alt="Noticia principal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0  flex flex-col justify-end p-4 sm:p-6">
          <h1 className="text-xl text-white sm:text-4xl font-bold">
            Título de la noticia principal
          </h1>
          <p className="text-white mt-1 sm:mt-2 text-sm sm:text-base max-w-2xl">
            Breve descripción de la noticia para atrapar la atención del lector.
          </p>
        </div>
      </section>

      {/* Categorías */}
      <nav className="bg-color2 my-3 py-3 shadow overflow-x-auto">
        <ul className="flex justify-center gap-4 sm:gap-6 px-4 sm:px-0 whitespace-nowrap">
          {categories.map((cat) => (
            <li
              key={cat}
              className="cursor-pointer hover:text-blue-600 font-medium"
            >
              {cat}
            </li>
          ))}
        </ul>
      </nav>

      {/* Noticias random */}
      <main className="flex-1 bg-color3 container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {randomNews.map((news, i) => (
          <div
            key={i}
            className="border border-color5 rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src="/1.jpg"
              alt={news.title}
              width={250}
              height={250}
              className="w-full object-cover p-2 sm:p-1 rounded"
            />
            <div className="p-3 sm:p-4">
              <h2 className="text-base sm:text-lg font-semibold">
                {news.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                Resumen breve de la noticia para el usuario.
              </p>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-4 sm:py-6 text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()} Mi Portal de Noticias</p>
      </footer>
    </div>
  );
}
