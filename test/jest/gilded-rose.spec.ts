import {backstagePassesToATAFKAL80ETCConcert, GildedRose, Item, sulfurasHandOfRagnaros} from '@/gilded-rose';

describe('Gilded Rose', () => {
    [
      [new Item("+5 Dexterity Vest", 10, 20), 9, 19],
      [new Item("Aged Brie", 2, 0), 1, 1],
      [new Item("Elixir of the Mongoose", 5, 7), 4, 6],
      [new Item("Sulfuras, Hand of Ragnaros", 0, 80), 0, 80],
      [new Item("Sulfuras, Hand of Ragnaros", -1, 65), -1, 65],
      [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20), 14, 21],
      [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49), 9, 50],
      [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49), 4, 50]
    ].forEach(tc => {
    it(`should do ${tc} something`, () => {
      const item: Item = tc[0] as Item;
      const expectedSellin = tc[1];
      const expectedQuality = tc[2];

      const gildedRose = new GildedRose([item]);
      const items = gildedRose.updateQuality()!;
      expect(items[0].quality).toBe(expectedQuality);
      expect(items[0].sellIn).toBe(expectedSellin);
   });
});


  [
    ['foo', -1, 5, -2, 3 ],
    ['Aged Brie', -1, 5, -2, 7 ],
    [backstagePassesToATAFKAL80ETCConcert, -1, 5, -2, 0 ],
    [backstagePassesToATAFKAL80ETCConcert, 1, 5, 0, 8, ],
    [backstagePassesToATAFKAL80ETCConcert, 1, 5, 0, 8],
    [backstagePassesToATAFKAL80ETCConcert, 1, 50, 0, 50],
  ].forEach(tc => {
    it(`should change ${tc} quality correctly`, () => {
      const name = tc[0];
      const sellIn = tc[1];
      const quality = tc[2];
      const expectedSellin = tc[3];
      const expectedQuality = tc[4];

      const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(expectedQuality);
      expect(items[0].sellIn).toBe(expectedSellin);
    });

  });
});


// describe("updateItem", () => {
//   it.each([
//     [1, true],
//     ["car", false]
//   ])("when the input is '%s'", (text, expected) => {
//     expect(isPalindrome(text)).toBe(expected);
//   });
// });
