import SearchBox from './components/SearchBox';

const App = () => {
  return (
    <SearchBox
      onChange={value => {
        console.log(value);
      }}
    />
  );
};

export default App;
