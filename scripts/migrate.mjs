import pg from 'pg';

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is required for inquiry storage.');
  process.exit(1);
}
const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
try {
  await client.connect();
  await client.query(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      email VARCHAR(150),
      location VARCHAR(120) NOT NULL,
      service VARCHAR(80) NOT NULL,
      details TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  console.log('Inquiry storage ready.');
} finally {
  await client.end();
}
