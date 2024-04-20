import PostDetail from './components/PostDetail';
import Providers from './providers';

const App = () => {
  return (
    <Providers>
      <PostDetail postId={1} />
    </Providers>
  );
};

export default App;
