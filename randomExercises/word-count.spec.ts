import Words from './word-count'

describe('words()', () => {
  const words = new Words();

  it('counts one word', () => {
    const expectedCounts = { word: 1 };
    expect(words.count('word')).toEqual(expectedCounts);
  })

  it('counts one of each', () => {
    const expectedCounts = { one: 1, of: 1, each: 1 };
    expect(words.count('one of each')).toEqual(expectedCounts);
  })

  it('counts multiple occurrences', () => {
    const expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(words.count('one fish two fish red fish blue fish')).toEqual(expectedCounts);
  })

  it("empty string", () => {
    const expectedCounts = {};
    expect(words.count("")).toEqual(expectedCounts);
  })

  it("empty string nummero 2", () => {
    const expectedCounts = {};
    expect(words.count("   ")).toEqual(expectedCounts);
  })

  it("upper -and lowercase words", () => {
    const expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(words.count('one Fish two fish Red fish blue fish')).toEqual(expectedCounts);
  })
  
  it("comma", () => {
    const expectedCounts = {};
    expect(words.count(" , ")).toEqual(expectedCounts);
  })
  
  it("sentence with comma", () => {
    const expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(words.count('one fish, two fish red fish blue fish')).toEqual(expectedCounts);
  })

  it("sentence with SPACE-comma ;)", () => {
    const expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(words.count('one fish , two fish red fish blue fish')).toEqual(expectedCounts);
  })
})