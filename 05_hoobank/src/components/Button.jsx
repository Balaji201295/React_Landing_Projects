const Button = ({ styles, label }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none border-none cursor-pointer rounded-xl ${styles}`}
    >
      {label}
    </button>
  );
};
export default Button;
