import {GildedRose, Item, sulfurasHandOfRagnaros} from '@/gilded-rose';

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


});
