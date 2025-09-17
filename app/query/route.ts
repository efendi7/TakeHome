import postgres from 'postgres';

// Buat koneksi ke database Postgres
// Pastikan di .env.local ada POSTGRES_URL
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Query invoices yang amount = 666
async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  return data;
}

// Route handler GET /query
export async function GET() {
  try {
    // return hasil query dalam format JSON
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
