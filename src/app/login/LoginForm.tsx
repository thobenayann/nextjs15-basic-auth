'use client';

import { Button } from '@/src/components/ui/button';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { login } from './action';

export default function LoginForm() {
    const [state, loginAction] = useActionState(login, undefined);
    return (
        <form
            action={loginAction}
            className='flex max-w-[300px] flex-col gap-2'
        >
            <div className='flex flex-col gap-2'>
                <input id='email' name='email' placeholder='Email' />
            </div>
            {state?.errors?.email && (
                <p className='text-red-500'>{state.errors.email}</p>
            )}
            <div className='flex flex-col gap-2'>
                <input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Password'
                />
            </div>
            {state?.errors?.password && (
                <p className='text-red-500'>{state.errors.password}</p>
            )}
            {/* This submit button use useFormStatus hook to disable the button when the form is submitting */}
            {/* It needs to be in the form to work */}
            <SubmitButton />
        </form>
    );
}
function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button disabled={pending} type='submit'>
            Login
        </Button>
    );
}
