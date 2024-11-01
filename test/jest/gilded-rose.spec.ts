import {backstagePassesToATAFKAL80ETCConcert, GildedRose, Item, sulfurasHandOfRagnaros} from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('should reduce quality by one ', () => {
    const gildedRose = new GildedRose([new Item('foo', 1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });


  it('should reduce quality by one ', () => {
    const gildedRose = new GildedRose([new Item(sulfurasHandOfRagnaros, 1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5);
  });

  [
    [backstagePassesToATAFKAL80ETCConcert, 1, 5, 8],
    [backstagePassesToATAFKAL80ETCConcert, 1, 5, 8],
    [backstagePassesToATAFKAL80ETCConcert, 1, 50, 50],
  ].forEach(tc => {
    it('should change quality correctly', () => {
      const name = tc[0];
      const sellIn = tc[1];
      const quality = tc[2];
      const expectedQuality = tc[3];

      const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(expectedQuality);
    });

  });

  it('should reduce quality by one ', () => {
    const gildedRose = new GildedRose([new Item(backstagePassesToATAFKAL80ETCConcert, 1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

});
