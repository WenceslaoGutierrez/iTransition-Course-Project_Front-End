import { ToastContainer } from 'react-toastify';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';
import AuthPage from './pages/AuthPage';
import Layout from './Layout';

function App() {
  return (
    <>
      <Layout>
        <AuthPage />
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
