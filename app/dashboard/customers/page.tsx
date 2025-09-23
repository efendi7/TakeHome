import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
      </div>

      {/* Customer content - bisa diganti dengan table atau cards nanti */}
      <div className="mt-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Customer management coming soon...</p>
          <p className="text-sm text-gray-400 mt-2">
            Search query: {query || 'No search query'}
          </p>
        </div>
      </div>
    </div>
  );
}