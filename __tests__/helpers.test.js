test('format_plural() returns a pluralized word', () => {
const word1 = format_plural('tiger', 1);
const word2 = format_plural('lion', 2);

expect(word1).toBe('tiger');
expect(word2).toBe('lion');
});

test('format_date() returns a date string', () => {
    const date = new Date('2021-12-26 11:23:45');

    expect(format_date(date)).toBe('12/26/2021');
});