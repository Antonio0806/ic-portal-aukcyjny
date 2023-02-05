import './App.css';
import TopMenu from "./TopMenu";
import Box from "@mui/material/Box";
import ProductsList from "./ProductsList";
const products = [
    {
        id: 1,
        name: 'Product 1',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ditdXPVVQ8FN87MLTGMbqQHaFf%26pid%3DApi&f=1&ipt=8c6fd9a972fa6a10253bc875937f8d3dd7df2d9b8343053d66ad7404c42a2f27&ipo=images',
        price: '$199',
        description: 'test',
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
      </Box>
  );
}

export default App;
