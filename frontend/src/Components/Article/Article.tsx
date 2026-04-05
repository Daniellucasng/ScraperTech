import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

export const Article = () => {
    const settings = {
        dots: true, // Muestra puntos de navegación
        infinite: true, // Ciclo infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 3, // Número de tarjetas visibles
        slidesToScroll: 1, // Número de tarjetas a desplazar
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <article>
      <h3>Algunos productos que puedes buscar</h3>
      <Slider {...settings}>
        <Link to="/mouse" className="product-card-link">
          <div className="product-card">
            <img
              src="https://playtech.co.nz/cdn/shop/files/105422-2.png?v=1720743422&width=1024"
              alt="Mouse Gamer"
            />
            <h3>MOUSE</h3>
          </div>
        </Link>
        <Link to="/laptops" className="product-card-link">
          <div className="product-card">
            <img
              src="https://dlcdnwebimgs.asus.com/gain/CFE9CB59-216D-4AC9-AEAE-10054506055C/h300/w300"
              alt="Laptop Gamer"
            />
            <h3>LAPTOPS</h3>
          </div>
        </Link>
        <Link to="/procesadores" className="product-card-link">
          <div className="product-card">
            <img
              src="https://acdn.mitiendanube.com/stores/854/212/products/556731-74fbeefa37433fa0fc16340734083951-480-0.png"
              alt="Procesadores"
            />
            <h3>PROCESADORES</h3>
          </div>
        </Link>
        <Link to="/audifonos" className="product-card-link">
          <div className="product-card">
            <img
              src="https://www.invidcomputers.com/images/000000000041182927721411829.png"
              alt="Audífonos"
            />
            <h3>AUDÍFONOS</h3>
          </div>
        </Link>
        <Link to="/monitores" className="product-card-link">
          <div className="product-card">
            <img
              src="https://i.ebayimg.com/images/g/KJ4AAOSw46Vj3Ljc/s-l400.png"
              alt="Monitores"
            />
            <h3>MONITORES</h3>
          </div>
        </Link>
      </Slider>
    </article>
  );
};
