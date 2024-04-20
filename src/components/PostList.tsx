import { Post } from '../types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res?.data);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Error fetching data');
        setPosts([]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (posts.length === 0) return <p>No posts available.</p>;

  return <ul>{posts?.map(post => <li key={post.id}>{post.title}</li>)}</ul>;
};

export default PostList;
