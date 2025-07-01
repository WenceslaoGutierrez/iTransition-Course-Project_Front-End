import { ToastContainer } from 'react-toastify';
import AuthPage from './pages/AuthPage';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Layout>
        <Dashboard />
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
