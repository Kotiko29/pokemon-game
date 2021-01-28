import HeaderBlock from "./components/HeaderBlock";
import LayoutBlock from "./components/LayoutBlock";
import FooterBlock from "./components/FooterBlock";

const App = () => {
  return (
    <>
      <HeaderBlock 
        title="This is title"
        descr="This is Description!"
      />
      <LayoutBlock
        id="1"
        title="Layout 1"
        desc = "Desc 1"
        urlBg = '../assets/bg1.jpg'
      />
      <LayoutBlock 
        id="2"
        title="Layout 2"
        desc = "Desc 2"
        colorBg = "grey"
      />
      <LayoutBlock 
        id="3"
        title="Layout 3"
        desc = "Desc 3"
        urlBg = '../assets/bg3.jpg'
      />
      <FooterBlock />

    </>
  );
}

export default App;
