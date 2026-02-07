import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon, Megaphone } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

interface PageProps {
    flash?: {
        message?: string;
    }
}

export default function Index() {
    const { flash } = usePage<PageProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className='p-4'>
                <Link href="/products/create">
                    <Button>Create a Product</Button>
                </Link>
            </div>
            <div className="m-4">
                {flash?.message && (
                   <Alert>
                       <Megaphone />
                       <AlertTitle>Notification</AlertTitle>
                       <AlertDescription>
                           {flash.message}
                       </AlertDescription>
                   </Alert>
                )}
            </div>
        </AppLayout>
    );
}
