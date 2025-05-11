const Divider = () => {
  return (
    <div className="relative my-6 w-full h-[1px] bg-light-cyan">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-grayish-blue px-2 py-1 rounded">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        className="fill-light-cyan"
        >
          <rect x="6" y="4" width="4" height="16" rx="1.5"/>
          <rect x="14" y="4" width="4" height="16" rx="1.5" />
        </svg>
      </div>
    </div>
  );
};
export default Divider;