'use client';

import { Button } from '@/src/components/ui/button';
import { logout } from '../login/action';

export default function Dashboard() {
    return (
        <div>
            <h1 className='text-lg'>Dashboard</h1>
            <Button onClick={() => logout()}>Logout</Button>
        </div>
    );
}
