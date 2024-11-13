import { Test, TestingModule } from '@nestjs/testing';
import { ColeccionesController } from './colecciones.controller';

describe('ColeccionesController', () => {
  let controller: ColeccionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColeccionesController],
    }).compile();

    controller = module.get<ColeccionesController>(ColeccionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
