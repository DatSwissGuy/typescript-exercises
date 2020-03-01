import Anagram from './anagram';

describe('Anagram', () => {
  // expects 0 match
  it("no matches", () => {
    const subject = new Anagram("diaper")
    const matches = subject.matches([ "hello", "world", "zombies", "pants"])

    expect(matches).toEqual([])
  })
  // expects 1 match
  it("detects simple anagram", () => {
    const subject = new Anagram("ant")
    const matches = subject.matches(["tan", "stand", "at"])

    expect(matches).toEqual(['tan'])
  })
  // expects 0 match
  it("does not detect false positives", () => {
    const subject = new Anagram("galea")
    const matches = subject.matches(["eagle"])

    expect(matches).toEqual([])
  })
  // expects 1 match
  it("detects anagram", () => {
    const subject = new Anagram("listen")
    const matches = subject.matches(["enlists", "google", "inlets", "banana"])

    expect(matches).toEqual(["inlets"])
  })
  // expects 0 match
  it("no inputs given!", () => {
    const subject = new Anagram("")
    const matches = subject.matches(["enlists", "google", "inlets", "banana"])

    expect(matches).toEqual([])
   })
  // palindromes don't count!
  it("not really an anagram, but a palindrome!", () => {
    const subject = new Anagram("anna")
    const matches = subject.matches(['enlists', 'google', 'inlets', 'banana','anna'])

    expect(matches).toEqual([])
  })
  // test for case sensitivity
  it("case senstivity? i don't care!", () => {
    const subject = new Anagram("Listen")
    const matches = subject.matches(["enlists", "google", "inlets", "banana"])

    expect(matches).toEqual([])
  })
  // don't detect the own word as it's own anagram, duh
  it("does not detect a word as its own anagram", () => {
    const subject = new Anagram("banana")
    const matches = subject.matches(["enlists", "google", "inlets", "banana"])

    expect(matches).toEqual([])
  })
  // test that expects more than 1 anagram
  it("does not detect a word as its own anagram", () => {
    const subject = new Anagram("betas")
    const matches = subject.matches(["beats", "beast", "inlets", "banana"])

    expect(matches).toEqual(["beats","beast"])
  })
  // test that expects even more than 2 anagrams
  it("does not detect a word as its own anagram", () => {
    const subject = new Anagram("diapers")
    const matches = subject.matches(["aspired", "despair", "praised", "banana"])

    expect(matches).toEqual(["aspired","despair","praised"])
  })
})