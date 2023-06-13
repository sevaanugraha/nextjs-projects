import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { environmentVariables } from '../utility/constants';
import { Logo } from '@/components/Logo.jsx';

export default function SignUp() {
  const baseUrl = environmentVariables.apiUrl;
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const { email, firstName, lastName } = data;

    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName, lastName }),
      });

      if (response.ok) {
        setApiError(null);
        setSuccessMessage(t('Please check your email for verification.'));
        reset();
      } else {
        const error = await response.json();
        setApiError(error.errors[0].message);
        setSuccessMessage(null);
      }
    } catch (error) {
      setApiError(t('Something went wrong'));
    }
  };

  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
            <Link href="/" aria-label="Home">
              <Logo className="mr-2 h-16 w-16" />
            </Link>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                {t("Register Your Account")}
              </h1>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {t("Email address")}
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        {...register('email', { required: `${t('Email is required')})` })}
                        className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6${
                          errors.email && 'ring-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {t("First Name")}
                    </label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        type="text"
                        autoComplete="firstName"
                        required
                        {...register('firstName', { required: `${t("First Name is required")}` })}
                        className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 ${
                          errors.firstName && 'ring-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {t("Last Name")}
                    </label>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        type="text"
                        autoComplete="lastName"
                        required
                        {...register('lastName', { required: `${t('Last Name is required')}` })}
                        className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 ${
                          errors.lastName && 'ring-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-center text-sm">
                    {t("By signing up I agree to the")}{' '}
                    <Link
                      className="text-cyan-500 hover:text-cyan-400"
                      href={`/privacy`}
                      target="_blank"
                    >
                      {t("Privacy Policy")}
                    </Link>{' '}
                    {t("and")}{' '}
                    <Link
                      className="text-cyan-500 hover:text-cyan-400"
                      href={`/terms`}
                      target="_blank"
                    >
                      {t("Terms of Service")}
                    </Link>
                    .
                  </div>

                  <div>
                    {apiError && <p className="text-bold mb-4 text-red-500">{apiError}</p>}
                    {successMessage && (
                      <p className="text-bold mb-4 text-green-500">{successMessage}</p>
                    )}

                    <button
                      type="submit"
                      className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm disabled:opacity-60 hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 w-full"
                    >
                      {t("Register")}
                    </button>
                  </div>
                </form>
            
                <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/login`} aria-label="Home" className='mt-4 block text-sm font-medium text-cyan-500 hover:text-cyan-400 underline text-center'>
                    Login by existing account.
                </Link>

              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

SignUp.hideHeader = true
SignUp.hideFooter = true
