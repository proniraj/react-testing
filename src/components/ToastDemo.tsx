import toast, { Toaster } from 'react-hot-toast';

const ToastDemo = () => {
  return (
    <div>
      <button onClick={() => toast.success('Success')}>Show Toast</button>
      <Toaster />
    </div>
  );
};

export default ToastDemo;
