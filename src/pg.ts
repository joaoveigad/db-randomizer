import { Pool } from 'pg';

const pool = new Pool({
    user: 'jau',      
    host: 'localhost',        
    database: 'uber-driving', 
    password: 'jau123', 
    port: 5435,               
});

export default pool;
