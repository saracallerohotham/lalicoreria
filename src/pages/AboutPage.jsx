export function AboutPage() {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      {/* Encabezado Principal */}
      <section className="text-center mb-12 ">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Sobre Nosotros
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Pasión por las bebidas artesanales y refrescantes
        </p>
      </section>

      {/* Introducción */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8 mt-6">
          Quiénes Somos
        </h2>
        <p className="text-gray-700 leading-relaxed">
          En <span className="font-semibold text-gray-900">La Licorería</span>,
          somos más que una simple tienda de bebidas. Fundada en{" "}
          <span className="font-semibold text-gray-900">2022</span>, nuestra
          misión es ofrecer una amplia gama de bebidas alcohólicas de diversas
          marcas, así como una selección de gaseosas para complementar cada
          ocasión. Nos dedicamos a curar una colección de productos que no solo
          satisfacen, sino que superan las expectativas de nuestros clientes.
        </p>
      </section>

      {/* Historia */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 mt-6 text-center">
          Nuestra Historia
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Desde nuestros comienzos en{" "}
          <span className="font-semibold text-gray-900">2022</span>, en{" "}
          <span className="font-semibold text-gray-900">La Licorería</span>{" "}
          hemos trabajado con la convicción de ofrecer bebidas de alta calidad
          que se adapten a todos los gustos y celebraciones. Empezamos con una
          pequeña pero cuidadosamente seleccionada oferta y, con el tiempo,
          hemos crecido para incluir una variedad aún mayor de productos,
          siempre manteniendo un enfoque en la calidad y la satisfacción del
          cliente.
        </p>
      </section>

      {/* Productos y Especialidades */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 mt-6 text-center">
          Nuestros Productos
        </h2>
        <p className="text-gray-700 leading-relaxed">
          En <span className="font-semibold text-gray-900">La Licorería</span>,
          no solo nos enfocamos en ofrecer una gama variada de bebidas
          alcohólicas de marcas reconocidas, sino también en proporcionar
          opciones de gaseosas que complementen perfectamente nuestras ofertas.
          Cada producto ha sido seleccionado con cuidado para garantizar que
          cada botella o lata que compres cumpla con nuestros estándares de
          calidad y satisfacción.
        </p>
      </section>

      {/* Compromiso con el Cliente */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 mt-6 text-center">
          Compromiso con el Cliente
        </h2>
        <p className="text-gray-700 leading-relaxed">
          En <span className="font-semibold text-gray-900">La Licorería</span>,
          nuestro compromiso es con la satisfacción de nuestros clientes.
          Ofrecemos un servicio personalizado y atento para ayudarte a encontrar
          exactamente lo que necesitas, ya sea para una celebración especial o
          para un simple disfrute personal. Tu satisfacción es nuestra
          prioridad.
        </p>
      </section>

      {/* Valores y Filosofía */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 mt-6">
          Nuestros Valores
        </h2>
        <p className="text-gray-700 mb-6">
          En <span className="font-semibold text-gray-900">La Licorería</span>,
          valoramos la autenticidad, la calidad y la satisfacción del cliente.
          Nos esforzamos por ofrecer productos que reflejen estos valores y que,
          al mismo tiempo, respeten el medio ambiente y las prácticas
          comerciales responsables.
        </p>
        <button className="bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition duration-300 ">
          Ver Productos
        </button>
      </section>
    </div>
  );
}
