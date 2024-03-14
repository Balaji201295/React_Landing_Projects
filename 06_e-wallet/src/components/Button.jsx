const Button = ({ label, styles, imgUrl }) => (
  <button
    type="button"
    className={`flex justify-center items-center font-poppins font-normal text-[1rem] leading-normal px-6 py-2 rounded-3xl h-[50px] capitalize ${
      styles ? styles : "bg-[#7E85F9] text-white"
    }`}
  >
    {imgUrl && <img src={imgUrl} alt="Play" className="mr-1" />} {label}
  </button>
);
export default Button;
