import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, type ComponentProps, type FormEvent } from 'react';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function LoginForm({ className, ...props }: ComponentProps<'form'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast
      .promise(login(email, password), {
        pending: t('loginForm.loggingIn'),
        success: {
          render() {
            //navigate('/dashboard');
            return t('loginForm.welcomeBack');
          }
        },
        error: {
          render({ data }: any) {
            return data.response?.data?.message || t('errors.unexpected');
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form className="p-6 md:p-8" onSubmit={handleSubmit} {...props}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">{t('loginForm.title')}</h1>
          <p className="text-muted-foreground text-balance">{t('loginForm.subtitle')}</p>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">{t('loginForm.emailLabel')}</Label>
          <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">{t('loginForm.passwordLabel')}</Label>
          </div>
          <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? t('loginForm.loggingIn') : t('loginForm.loginButton')}
        </Button>
      </div>
    </form>
  );
}
