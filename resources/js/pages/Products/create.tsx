import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { InfoIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Product',
        href: '/products/create',
    },
];

export default function Index() {

    const {data, setData, post, processing, errors} = useForm({
        name: '',
        price: '',
        description: ''
    });

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        post('/products');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a new Product" />
            <div className="p-4">
                <form onSubmit={handleSubmit} action="">
                    {/* Display error */}
                    {Object.keys(errors).length > 0 && (
                    <Alert>
                        <InfoIcon />
                        <AlertTitle>Errors!</AlertTitle>
                        <AlertDescription>
                        <ul>
                            {Object.entries(errors).map(([key, message]) => (
                            <li key={key}>{message as string}</li>
                            ))}
                        </ul>
                        </AlertDescription>
                    </Alert>
                    )}
                    <div className='m-4'>
                        <Label htmlFor='product name'>Name</Label>
                        <Input placeholder='Product Name' value={data.name} onChange={(e)=>setData('name', e.target.value)}></Input>
                    </div>
                    <div className='m-4'>
                        <Label htmlFor='product price'>Price</Label>
                        <Input placeholder='Price' value={data.price} onChange={(e)=>setData('price', e.target.value)}></Input>
                    </div>
                    <div className='m-4'>
                        <Label htmlFor='product description'>Description</Label>
                        <Textarea placeholder='description' value={data.description} onChange={(e)=>setData('description', e.target.value)}></Textarea>
                    </div>
                    <Button disabled={processing} type="submit">Add Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}
