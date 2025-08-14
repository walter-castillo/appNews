import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-[250px] sm:h-[400px] overflow-hidden rounded-lg">
      <Image
        src="/portada.jpg"
        alt="Noticia principal"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className=" absolute inset-0  flex flex-col justify-end p-4 sm:p-6">
        <h1 className=" text-xl text-white sm:text-4xl font-bold ">
          Título de la noticia principal
        </h1>
        <p className="text-white mt-1 sm:mt-2 text-sm sm:text-base max-w-2xl">
          Breve descripción de la noticia para atrapar la atención del lector.
        </p>
      </div>
    </div>
  );
}

export default Hero