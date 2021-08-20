import { Test, TestingModule } from '@nestjs/testing';
import { PainelAdminController } from './painel-admin.controller';

describe('PainelAdminController', () => {
  let controller: PainelAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PainelAdminController],
    }).compile();

    controller = module.get<PainelAdminController>(PainelAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
