import React, { FC, useState } from 'react';

type Props = {
  onChange: (text: string) => void;
};
const SearchBox: FC<Props> = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={event => {
        setSearchTerm(event.target.value);
      }}
      onKeyDown={event => {
        if (event.key === 'Enter' && searchTerm) {
          onChange(searchTerm);
        }
      }}
    />
  );
};

export default SearchBox;
