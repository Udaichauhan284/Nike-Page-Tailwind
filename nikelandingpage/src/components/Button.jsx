const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-orange-500 text-white border-orange-500"} rounded-full ${fullWidth && "w-full"} hover:bg-orange-800 duration-200 `}
    >
      {label}
      {iconURL && (<img 
       src={iconURL}
       alt="arrow right icon"
       className="ml-2 rounded-full w-5 h-5"
      /> )}
    </button>
  );
};

export default Button;