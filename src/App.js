import './App.css';
import TopMenu from "./TopMenu";
import Box from "@mui/material/Box";
import ProductsList from "./ProductsList";
import BottomMenu from "./BottomMenu";
const products = [
    {
        id: 1,
        name: 'Obrazek1',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$420',
        description: 'test',
    },
    {
        id: 2,
        name: 'Obrazek2',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$024',
        description: 'test',
    },
    {
        id: 1,
        name: 'Obrazek1',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$420',
        description: 'test',
    },
    {
        id: 2,
        name: 'Obrazek2',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$024',
        description: 'test',
    },
    {
        id: 1,
        name: 'Obrazek1',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$420',
        description: 'test',
    },
    {
        id: 2,
        name: 'Obrazek2',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$024',
        description: 'test',
    },
    {
        id: 1,
        name: 'Obrazek1',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$420',
        description: 'test',
    },
    {
        id: 2,
        name: 'Obrazek2',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$024',
        description: 'test',
    },
    {
        id: 1,
        name: 'Obrazek1',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$420',
        description: 'test',
    },
    {
        id: 2,
        name: 'Obrazek2',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$024',
        description: 'test',
    },
    {
        id: 1,
        name: 'Obrazek1',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$420',
        description: 'test',
    },
    {
        id: 2,
        name: 'Obrazek2',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.idzHwCe94sBtXA-3qfA1igHaE8%26pid%3DApi&f=1&ipt=63938c8da0a680032c0d29d2e3511b489d9ad6e39f088e9af172bd7b41bb7346&ipo=images',
        price: '$024',
        description: 'test',
    }
];
const styles = {
  root: {
    padding: '40px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '5px',
  },
};
function App() {
  return (
      <Box>
      <TopMenu />
      <div style={styles.root}>
        <div style={styles.gridContainer}>``
            <ProductsList products={products}/>
        </div>
      </div>
      <BottomMenu />
      </Box>
  );
}

export default App;
