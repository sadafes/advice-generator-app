const DiceButton = ({ onClick, loading }) => {
    return (
      <button
        onClick={onClick}
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-neon-green w-16 h-16 rounded-full flex items-center justify-center transition hover:shadow-[0_0_20px_theme(colors.neon-green)] ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        <div
          className={`w-8 h-8 bg-no-repeat bg-center bg-contain ${
            loading ? "animate-spin" : ""
          }`}
          style={{
            backgroundImage: "url('./src/assets/icon-dice.svg')",
          }}
        />
      </button>
    );
  };
  
  export default DiceButton;
  