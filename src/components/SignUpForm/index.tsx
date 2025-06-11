import { Label } from '@radix-ui/react-label';
import { useState, type ComponentProps, type FormEvent } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function SignUpForm({ className, ...props }: ComponentProps<'form'>) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = {
      name: name,
      email: email,
      password: password
    };
    /*
    try {
      await register(userData);
      console.log('Registration successful from form, user is now logged in.');
    } catch (err) {
      console.error('Registration failed in form:', err);
    }*/
  };
  return (
    <form className="p-6 md:p-8" onSubmit={handleSubmit} {...props}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Welcome!</h1>
          <p className="text-muted-foreground text-balance">Create your Acme Inc account</p>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Name</Label>
          <Input id="name" type="text" placeholder="John Doe" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </div>
    </form>
  );
}
