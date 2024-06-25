import React from "react";

export function Tweet({ id, name, content, like, onDelete, onLike }) {
  const handleLikeClick = () => {
    console.log("Liking tweet with ID:", id);
    onLike(id);
  };

  return (
    <div className="tweet">
      <button onClick={() => onDelete(id)} className="delete">
        ❌
      </button>
      <h3>{name}</h3>
      <p>{content}</p>
      <button onClick={handleLikeClick}>{like} ❤️</button>
    </div>
  );
}
