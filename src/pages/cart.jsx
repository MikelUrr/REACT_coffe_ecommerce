import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Cart = ({ onDelete }) => {
  const [showDeleteCard, setShowDeleteCard] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setShowDeleteCard(true);
    },
    onSwipedRight: (eventData) => {
        // Evita el comportamiento predeterminado del deslizamiento
        eventData.event.preventDefault();
        setShowDeleteCard(false);
      },
    });
  

  const handleDelete = () => {
    // Aquí puedes llamar a la función para borrar la tarjeta
    onDelete();
    setShowDeleteCard(false); // Oculta la tarjeta de borrar después de eliminar
  };

  return (
    <div {...handlers}>
      <div className="card">
        <div className="card-content">
          {/* Contenido de la tarjeta */}
          <p>Contenido de la tarjeta</p>
        </div>
      </div>
      {showDeleteCard && (
        <div className="delete-card">
          <p>Desliza para confirmar</p>
          <button className="delete-button" onClick={handleDelete}>
            Borrar
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
