const SUPABASE_URL = 'https://cyfhrcrwrafdajfxlcab.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5ZmhyY3J3cmFmZGFqZnhsY2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1MjA1NjEsImV4cCI6MTk5MDA5NjU2MX0.I_0cPyQXwJ-j8IHqc2ksldi4qMijdauEvpaN5XwqfVI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBooks() {
    const { data, error } = await client.from('books').select('*');

    return data;
}
