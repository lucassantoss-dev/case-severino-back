import { Test, TestingModule } from '@nestjs/testing';
import { PainelAdminService } from './painel-admin.service';

describe('PainelAdminService', () => {
  let service: PainelAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PainelAdminService],
    }).compile();

    service = module.get<PainelAdminService>(PainelAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
