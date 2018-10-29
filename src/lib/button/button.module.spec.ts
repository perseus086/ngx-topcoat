import { TpcButtonModule } from './button.module';

describe('ButtonModule', () => {
  let buttonModule: TpcButtonModule;

  beforeEach(() => {
    buttonModule = new TpcButtonModule();
  });

  it('should create an instance', () => {
    expect(buttonModule).toBeTruthy();
  });
});
