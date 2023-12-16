import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header
       title={"Kaiou"}
       link1={"Quero Ajuda"}
       link2={"kaoou"}
       />
      <body>
        <p>
          Olá
        </p>

        <section className="iWantToHelp">
        <h3 className="iWantToHelpTitle">
          Como Ajudar ?
        </h3>
        <section className="iWantToHelp1">
          <div className="container">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fermentum mi. Duis consequat erat at est placerat dapibus. Vivamus suscipit lobortis tellus sit amet tincidunt. Donec non ornare metus. Nam congue viverra viverra. Nunc mattis, massa id convallis tristique, est purus venenatis massa, eget tempor ante purus et urna. Quisque nec mi in eros pulvinar auctor. Praesent congue magna lectus. Fusce quis maximus turpis.
          </p>
          </div>
          <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fermentum mi. Duis consequat erat at est placerat dapibus. Vivamus suscipit lobortis tellus sit amet tincidunt. Donec non ornare metus. Nam congue viverra viverra. Nunc mattis, massa id convallis tristique, est purus venenatis massa, eget tempor ante purus et urna. Quisque nec mi in eros pulvinar auctor. Praesent congue magna lectus. Fusce quis maximus turpis.
          </p>  
          </div>
        </section>
        </section>
      </body>
      <fotter></fotter>

    </div>
  );
}

export default App;
