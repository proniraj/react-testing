import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useBoolean } from '../../src/hooks/useBoolean';

describe('useBoolean', () => {
  it('works', () => {
    expect.assertions(5);
    const { result } = renderHook(() => useBoolean());

    let [state, setters] = result.current;
    expect(state).toBe(false);
    act(() => setters.on());

    [state, setters] = result.current;
    expect(state).toBe(true);
    act(() => setters.off());

    [state, setters] = result.current;
    expect(state).toBe(false);
    act(() => setters.toggle());

    [state, setters] = result.current;
    expect(state).toBe(true);
    act(() => setters.set(false));

    [state] = result.current;
    expect(state).toBe(false);
  });
});
