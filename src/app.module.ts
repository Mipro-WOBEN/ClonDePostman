// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RequestsModule } from './requests/requests.module';
import { ColeccionesModule } from './colecciones/colecciones.module';
import { MethodsModule } from './methods/methods.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { RolesModule } from './roles/roles.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT'), 10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
        extra: {
          encrypt: true, // Habilitar SSL
          trustServerCertificate: true, // Deshabilitar la verificación del certificado
        },
      }),
    }),
    AuthModule,
    UsersModule,
    RequestsModule,
    ColeccionesModule,
    MethodsModule,
    ProyectosModule,
    RolesModule,
  ],
})
export class AppModule {}
