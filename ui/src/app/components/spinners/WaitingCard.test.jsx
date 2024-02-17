import { expect, test , vi} from 'vitest'
import {render} from '@testing-library/react';

import WaitingCard from 'app/components/spinners/WaitingCard';

beforeEach(() => {
  vi.useFakeTimers()
});

afterEach(() => {
  vi.runOnlyPendingTimers()
  vi.useRealTimers()
});

test("render waiting card", async () => {
  render(<WaitingCard isLoading={true} />);
});
