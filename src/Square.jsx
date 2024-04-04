function Square({value,onSquareClick}) {

    return (
      <button
        className="square"
        onClick={onSquareClick}
        style={{
          height: "100px",
          width: "100px",
          background: "black",
          border: "solid 2px white",
          color: "white"
        }}
      >
        {value}
      </button>
    );
    }
export default Square;