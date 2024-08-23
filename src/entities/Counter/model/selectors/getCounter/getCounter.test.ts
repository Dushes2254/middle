import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getValue', () => {
  test('should return counter state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };
    expect(getCounter(state as StateSchema));
  });
});
