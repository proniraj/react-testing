describe('main', () => {
  it('should work', () => {
    expect(1 + 1).toBe(2);
  });

  it('should fetch from mock server', async () => {
    const response = await fetch('/categories');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();

    expect(data).toHaveLength(3);
  });
});
