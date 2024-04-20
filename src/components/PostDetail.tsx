import axios from 'axios';
import { useEffect, useState } from 'react';
import { Post } from '../types';

const PostDetail = ({ postId }: { postId: number }) => {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!postId) return setError('Invalid postId');

    setIsLoading(true);

    axios
      .get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        console.log('postid', postId);
        console.log('response.data', response.data);
        if (!response.data.id) return setPost(undefined);
        setPost(response.data);
      })
      .catch(er => {
        // eslint-disable-next-line
        if (er?.response?.status === 404) {
          return setPost(undefined);
        }
        setError('Error fetching data');
      })
      .finally(() => {
        setIsLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!postId) return <div>Invalid postId</div>;

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!post) return <div>The given post was not found.</div>;

  return (
    <div>
      <h1>Post Detail</h1>
      <div>
        <strong>Title:</strong>
        <span>{post.title}</span>
        <br />
        <strong>Body:</strong> <span>{post.body}</span>
        <br />
        <strong>Id:</strong> <span>{post.id}</span>
      </div>
    </div>
  );
};

export default PostDetail;
