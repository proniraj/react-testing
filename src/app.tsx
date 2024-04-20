import PostList from './components/PostList';
import Providers from './providers';

const App = () => {
  return (
    <Providers>
      <PostList />
    </Providers>
  );
};

export default App;
