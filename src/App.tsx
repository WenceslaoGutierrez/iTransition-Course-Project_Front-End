import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center">
        <div className="w-full max-w-sm md:max-w-xl">
          <AuthPage />
        </div>
      </div>
    </>
  );
}

export default App;
