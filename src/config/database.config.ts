import { TypeOrmModule } from '@nestjs/typeorm';
export const DatabaseConfig = () => TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'learning',
    autoLoadEntities: true, // Automatically load entities
    synchronize: true, // Use only in development (auto-sync schema)
  })