import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-gray-300 text-center py-4 sm:py-6 text-sm sm:text-base">
      <p>&copy; {new Date().getFullYear()} Mi Portal de Noticias</p>
    </footer>
  )
}

export default Footer