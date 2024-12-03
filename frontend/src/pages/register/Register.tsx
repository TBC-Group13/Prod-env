import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validation/validationSchema';
import FormInput from '../../components/Form Components/FormInput';
import PasswordField from '../../components/Form Components/PasswordField';
import { Label } from '@radix-ui/react-label';
import { Link } from 'react-router-dom';
import { mobileStylesForForms } from '../login/Login';

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  interface FormData {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="mt-10 flex items-center justify-center font-anek-devanagari sm:mt-28">
      <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <Card className={`flex flex-col gap-3 p-5 ${mobileStylesForForms}`}>
          <CardHeader>
            <CardTitle className="mt-2 self-start text-3xl sm:self-center sm:text-xl">
              Sign Up
            </CardTitle>
          </CardHeader>

          <CardContent>
            <FormInput
              label="Username"
              type="text"
              placeholder="Username"
              register={register('username')}
              error={errors.username?.message}
            />
            <FormInput
              label="Email"
              type="text"
              placeholder="Email"
              register={register('email')}
              error={errors.email?.message}
            />
            <PasswordField
              label="Password"
              register={register('password')}
              error={errors.password?.message}
            />
            <PasswordField
              label="Repeat Password"
              register={register('repeatPassword')}
              error={errors.repeatPassword?.message}
            />
            <div className="mt-4 flex items-baseline justify-between">
              <Label className="text-[14px] text-[gray]">
                already have an account?
              </Label>
              <Link to={'/login'} className="font-anek-devanagari text-primary">
                Sign In
              </Link>
            </div>
          </CardContent>

          <Button className="w-[87%] self-center p-6" variant="default">
            Sign Up
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Register;
