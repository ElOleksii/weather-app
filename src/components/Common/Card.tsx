const Card = ({ children, title = false, className = "" }) => {
  return (
    <div className={`bg-blue dark:bg-grey rounded-xl p-7  ${className}`}>
      {title && <h5 className="font-semibold mb-5 text-white">{title}</h5>}
      <div className="flex flex-col gap-y-5">{children}</div>
    </div>
  );
};

export default Card;
