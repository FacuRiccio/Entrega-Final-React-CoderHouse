const ButtonOption = ({ Icon, size, texto, color, counter }) => {
  return (
    <div href="" className="btn-contenedor">
      <span className="btn-option">
        <Icon size={size} color={color}></Icon>
      </span>
      <h5 className="btn-text">{texto}</h5>
      <span>{counter}</span>
    </div>
  );
};
export default ButtonOption;
