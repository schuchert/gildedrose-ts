
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export const backstagePassesToATAFKAL80ETCConcert = 'Backstage passes to a TAFKAL80ETC concert';
export const sulfurasHandOfRagnaros = 'Sulfuras, Hand of Ragnaros';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name != 'Aged Brie' && item.name != backstagePassesToATAFKAL80ETCConcert) {
        if (item.quality > 0) {
          if (item.name != sulfurasHandOfRagnaros) {
            item.quality = item.quality - 1
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item.name == backstagePassesToATAFKAL80ETCConcert) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
          }
        }
      }
      if (item.name != sulfurasHandOfRagnaros) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != backstagePassesToATAFKAL80ETCConcert) {
            if (item.quality > 0) {
              if (item.name != sulfurasHandOfRagnaros) {
                item.quality = item.quality - 1
              }
            }
          } else {
            item.quality = 0
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    }

    return this.items;
  }
}
