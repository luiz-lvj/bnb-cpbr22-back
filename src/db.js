import pg from 'pg';

const { Pool } = pg;
const user = 'postgres';
const password = 'postgre';
const host = 'localhost';
const port_database = 5432;
const database = 'medsync';

const connection = new Pool({
    user,
    password,
    host,
    port_database,
    database
});

export default connection;