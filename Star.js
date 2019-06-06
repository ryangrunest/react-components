import React from 'react';
function Star({
  value,
  color,
  handleHover,
  handleHoverLeave,
  handleClick,
  isFilled
})  {
  if (!handleHover)  {
    return (
      <span
        className="Star"
        style={{ color }}
        onMouseEnter={() => console.log('hovered in')}
        onMouseLeave={() => console.log('hovered out')}
        onClick={() => alert('clicked a star')}
      >
        {isFilled ? '★' : '☆'}
      </span>
    )
  }
  return (
    <span
      className="Star"
      style={{ color }}
      onMouseEnter={() => handleHover(value)}
      onMouseLeave={() => handleHoverLeave(value)}
      onClick={() => handleClick(value)}
    >
      {isFilled ? '★' : '☆'}
    </span>
  );
}
export default Star;