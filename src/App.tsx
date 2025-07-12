import { ToastContainer } from 'react-toastify';
import AuthPage from './pages/AuthPage';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import { LanguageSelector } from './components/ui/LanguageSelector';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { useTheme } from './components/ThemeProvider';

function App() {
  const { theme } = useTheme();

  return (
    <>
      <Layout>
        <AuthPage />
        <LanguageSelector />
        <ThemeToggle />
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
        theme={theme}
      />
    </>
  );
}

export default App;
