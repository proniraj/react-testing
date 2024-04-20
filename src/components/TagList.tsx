import delay from 'delay';
import { useEffect, useState } from 'react';

const TagList = () => {
  const [tags, setTags] = useState<string[]>([]);

  const fetchTags = async () => {
    await delay(500);
    return ['tag1', 'tag2', 'tag3'];
  };

  useEffect(() => {
    fetchTags()
      .then(res => {
        setTags(res);
      })
      .catch(() => {});
  }, []);

  return (
    <ul>
      {tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};

export default TagList;
