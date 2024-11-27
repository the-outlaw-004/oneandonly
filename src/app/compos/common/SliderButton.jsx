const SliderButton = (props) => {
  const { classes, style, onClick, type } = props;
  return (
    <button
      className={`absolute top-1/2 rounded-lg px-4 bg-[#FFEEE0] hover:bg-[#FFCDA6] ${classes}`}
      onClick={onClick}
    >
      <img src={`/assets/images/${type}_arrow.png`} alt="Next" />
    </button>
  );
};

export default SliderButton;
