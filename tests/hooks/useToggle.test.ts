import { renderHook, act } from '@testing-library/react';
import useToggle from '../../src/hooks/useToggle';

describe('useToggle', () => {
  it('should defined with default', () => {
    expect(useToggle).toBeDefined();
  });

  it('should return initial value', () => {
    const initialValue = false;
    const { result } = renderHook(() => useToggle(initialValue));
    expect(result.current[0]).toEqual(initialValue);
  });

  it('should toggle when called second result', () => {
    const initialValue = false;
    const { result } = renderHook(() => useToggle(initialValue));
    const [value, toggle] = result.current;

    expect(value).toEqual(initialValue);

    act(() => {
      toggle();
    });

    expect(result.current[0]).toEqual(!initialValue);
  });
});

/**
 * The act function is used to wrap the code that triggers the state change.
 * This is necessary because React will throw a warning if a state change is triggered outside of a component lifecycle.
 * The renderHook function is used to render the hook in a test environment.
 * The result object contains the current state of the hook.
 * The expect function is used to assert that the state has changed as expected.
 */
