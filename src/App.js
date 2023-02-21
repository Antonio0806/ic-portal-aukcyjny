import './App.css';
import TopMenu from "./TopMenu";
import Box from "@mui/material/Box";
import ProductsList from "./ProductsList";
import BottomMenu from "./BottomMenu";
const products = [
    {
        id: 1,
        name: 'Kolaż (wydruk) "Spokój" w formacie A3',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ditdXPVVQ8FN87MLTGMbqQHaFf%26pid%3DApi&f=1&ipt=8c6fd9a972fa6a10253bc875937f8d3dd7df2d9b8343053d66ad7404c42a2f27&ipo=images',
        price: '$199',
        description: 'Kolaż przedstawia ptaka - łabędzia, żyjącego z kompletami zastawy i obrusami na falach jednego stawu. Jak wszystkie babcie spokojny, słychać nawet tykanie zegara. Autorka pracy - Siliakova Maryna. Artystka urodziłą się w 1992 roku w Doniecku w Ukrainie, do Polski przeprowadziła się w 2017 roku. Z wykształcenia chemiczka, w Warszawie postanowiła się przekwalifikować - obecnie jest absolwentką projektowania graficznego Społecznej Akademii Nauk. Artystka tworzy zarówno kolaże cyfrowe, jak i analogowe oraz chętnie dzieli się zdobytą wiedzą z otoczeniem, Maryna Siliakova jest młodą artystką nastawioną na poszukiwanie i odkrywanie, o czym świadczy eksploracja przez nią różnych technik, stosowanie rozmaitych materiałów od pasteli po tusz i eksperymentalne podejście do kompozycji. Jej prace były wyróżnianie w wielu konkursach krajowych i międzynarodowych.',
    },
    {
        id: 2,
        name: 'Product 2',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ditdXPVVQ8FN87MLTGMbqQHaFf%26pid%3DApi&f=1&ipt=8c6fd9a972fa6a10253bc875937f8d3dd7df2d9b8343053d66ad7404c42a2f27&ipo=images',
        price: '$249',
        description: 'test',
    }
];
const styles = {
  root: {
    padding: '40px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '40px',
  },
};
function App() {
  return (
      <Box>
      <TopMenu />
      <div style={styles.root}>

        <div style={styles.gridContainer}>
            <ProductsList products={products}/>
        </div>
      </div>
      <BottomMenu />
      </Box>
  );
}

export default App;
