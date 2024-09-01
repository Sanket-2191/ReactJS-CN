import "./styles.css";
//create a object to store all the styles.
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={Styles.formStyle}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={Styles.textStyle}>Sign Up</h3>
        <input style={Styles.inputStyle} placeholder="Username" />
        <input style={Styles.inputStyle} placeholder="Email" />
        <input style={Styles.inputStyle} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={Styles.btnDivStyle}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={Styles.cancelBtnStyle}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={Styles.loginBtnStyle}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}



const Styles = {
  formStyle: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  textStyle: { fontSize: "2rem", letterSpacing: 2 },
  inputStyle: { padding: 10 },
  btnDivStyle: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  cancelBtnStyle: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  },
  loginBtnStyle: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }



}