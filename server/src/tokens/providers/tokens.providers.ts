import { Provider } from '@nestjs/common';
import { Tokens } from '../models/tokens.model';
import { TOKENS_REPOSITORY } from '../tokens.constant';

export const tokensProviders: Provider[] = [
  {
    provide: TOKENS_REPOSITORY,
    useValue: Tokens,
  },
];
