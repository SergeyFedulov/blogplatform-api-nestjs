import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'blogplatform',
    password: '123',
    database: 'blogplatform',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
}

export default config;