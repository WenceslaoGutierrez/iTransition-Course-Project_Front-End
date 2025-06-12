import { LoginForm } from '@/components/LoginForm';
import { SignUpForm } from '@/components/SignUpForm';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  const toggleView = () => {
    setIsLoginView((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0">
          <div className="flex flex-col py-6 md:py-8 items-center">
            <div className="w-full max-w-md">{isLoginView ? <LoginForm /> : <SignUpForm />}</div>
            {isLoginView ? (
              <div className="text-center text-sm">
                Don&apos;t have an account?{' '}
                <a href="#" className="underline underline-offset-4" onClick={toggleView}>
                  Sign up
                </a>
              </div>
            ) : (
              <div className="text-center text-sm">
                Already have an account?{' '}
                <a href="#" className="underline underline-offset-4" onClick={toggleView}>
                  Sign in
                </a>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
