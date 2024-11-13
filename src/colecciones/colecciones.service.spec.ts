import { Test, TestingModule } from '@nestjs/testing';
import { ColeccionesService } from './colecciones.service';

describe('ColeccionesService', () => {
  let service: ColeccionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColeccionesService],
    }).compile();

    service = module.get<ColeccionesService>(ColeccionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
