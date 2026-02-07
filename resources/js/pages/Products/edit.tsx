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

interface Product{
    id: number,
    name: string,
    description: string,
    price: number,
}

interface Props {
    product: Product,
}

export default function Edit({product} : Props) {

    const {data, setData, put, processing, errors} = useForm({
        name: product.name,
        price: product.price,
        description: product.description,
    });

    const handleUpdate = (e: React.FormEvent) =>{
        e.preventDefault();
        put(`/products/${product.id}/edit`);
    }

    return (
        <AppLayout breadcrumbs={[{title: 'Edit', href: `/products/${product.id}/edit`}]}>
            <Head title="Update a Product" />
            <div className="p-4">
                <form onSubmit={handleUpdate} action="">
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
                    <Button type="submit">Update Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}
