// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RequestsModule } from './requests/requests.module';
import { ColeccionesModule } from './colecciones/colecciones.module';
import { MethodsModule } from './methods/methods.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '',
      database: 'postman',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      extra: {
        encrypt: true, // Habilitar SSL
        trustServerCertificate: true, // Deshabilitar la verificación del certificado
      },
    }),
    AuthModule,
    UsersModule,
    RequestsModule,
    ColeccionesModule,
    MethodsModule,
  ],
})
export class AppModule {}
