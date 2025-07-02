import { LoginForm } from '@/components/LoginForm';
import { SignUpForm } from '@/components/SignUpForm';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  const toggleView = () => {
    setIsLoginView((prev) => !prev);
  };
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0">
          <div className="flex flex-col py-6 md:py-8 items-center">
            <div className="w-full max-w-md">{isLoginView ? <LoginForm /> : <SignUpForm />}</div>
            {isLoginView ? (
              <div className="text-center text-sm">
                {t('authPage.bottomMessage')}{' '}
                <a href="#" className="underline underline-offset-4" onClick={toggleView}>
                  {t('authPage.bottomMessageALink')}
                </a>
              </div>
            ) : (
              <div className="text-center text-sm">
                {t('authPage.bottomMessageAlt')}{' '}
                <a href="#" className="underline underline-offset-4" onClick={toggleView}>
                  {t('authPage.bottomMessageALinkAlt')}
                </a>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        {t('authPage.TermsMessage')} <a href="#">{t('authPage.TermsOfService')}</a> {t('authPage.TermsMessageTwo')} <a href="#">{t('authPage.PrivacyPolicy')}</a>.
      </div>
    </div>
  );
}
