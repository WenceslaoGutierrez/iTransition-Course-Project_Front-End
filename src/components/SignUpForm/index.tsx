import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, type ComponentProps, type FormEvent } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export function SignUpForm({ className, ...props }: ComponentProps<'form'>) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { register } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const { firstName, lastName, email, password } = formData;
    toast
      .promise(register(firstName, lastName, email, password), {
        pending: t('signUpForm.registering'),
        success: {
          render({ data }: any) {
            //navigate('/dashboard');
            return data.data.message || t('signUpForm.success');
          }
        },
        error: {
          render({ data }: any) {
            return data.response?.data?.message || t('signUpForm.unexpectedError');
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch(() => {});
  };

  return (
    <form className="p-6 md:p-8" onSubmit={handleSubmit} {...props}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">{t('signUpForm.title')}</h1>
          <p className="text-muted-foreground text-balance">{t('signUpForm.subtitle')}</p>
        </div>
        <div className="grid grid-cols md:grid-cols-2 gap-3">
          <div className="grid gap-3">
            <Label htmlFor="firstName">{t('signUpForm.firstNameLabel')}</Label>
            <Input id="firstName" name="firstName" type="text" placeholder="John" required value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="lastName">{t('signUpForm.lastNameLabel')}</Label>
            <Input id="lastName" name="lastName" type="text" placeholder="Doe" required value={formData.lastName} onChange={handleChange} />
          </div>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">{t('signUpForm.emailLabel')}</Label>
          <Input id="email" name="email" type="email" placeholder="m@example.com" required value={formData.email} onChange={handleChange} />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">{t('signUpForm.passwordLabel')}</Label>
          </div>
          <Input id="password" name="password" type="password" required value={formData.password} onChange={handleChange} />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? t('signUpForm.registering') : t('signUpForm.button')}
        </Button>
      </div>
    </form>
  );
}
