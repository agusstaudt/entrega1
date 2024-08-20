import logo from "../img/images.jpg";

export const ItemListContainer = ({ greeting }) => {
  const estilosEnLinea = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh',
    width: '80%',
    margin: '1rem auto',
    backgroundColor:  "var(--white)", // Corregido de 'd0d0d0' a '#d0d0d0'
    padding: '20px',
  };

  const headStyle = {
    color: '#444',
    fontSize: '2vw',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: 'bold',
    textShadow: '8px 2px 8px rgba(0, 0, 0, 0.1)',
    margin: 0
  };

  const imgStyle = {
    width: '100%', // Ajusta el tamaño de la imagen
    objectFit: 'contain',
    height: '100%' // Mantiene la proporción de la imagen
  };

  return (
    <div className="item-list-container" style={estilosEnLinea}>
      <img src={logo} style={imgStyle} alt="el macho" />
      <h1 style={headStyle}>{greeting}</h1>
    </div>
  );
};