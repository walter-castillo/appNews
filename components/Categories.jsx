import { DATACATEGORIAS } from "@/data/data"


const Categories = () => {

      const categories = DATACATEGORIAS
  return (
    <nav className="bg-color2 my-3 py-3 shadow  overflow-x-auto">
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
  )
}

export default Categories