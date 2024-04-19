import OrderStatusSelector from './components/OrderStatusSelector';
import Providers from './providers';

const App = () => {
  return (
    <Providers>
      <OrderStatusSelector onChange={console.log} />
    </Providers>
  );
};

export default App;
