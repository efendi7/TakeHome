import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  
  try {
    const [invoice, customers] = await Promise.all([
      fetchInvoiceById(id),
      fetchCustomers(),
    ]);

    if (!invoice) {
      return {
        title: 'Invoice Not Found | Acme Dashboard',
      };
    }

    // Cari customer berdasarkan customer_id
    const customer = customers.find(c => c.id === invoice.customer_id);
    const customerName = customer?.name || 'Unknown Customer';

    return {
      title: `Edit Invoice #${invoice.id} | Acme Dashboard`,
      description: `Edit invoice for ${customerName} - Amount: $${invoice.amount}`,
    };
  } catch (error) {
    return {
      title: 'Error | Acme Dashboard',
    };
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}