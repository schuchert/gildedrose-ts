
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
  constructor(private items: Array<Item>) {
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name != 'Aged Brie' && item.name != backstagePassesToATAFKAL80ETCConcert) {
        if (item.quality > 0) {
          this.decrementQuality(item);
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item.name == backstagePassesToATAFKAL80ETCConcert) {
            if (item.sellIn < 11) {
              this.incrementQuality(item);
            }
            if (item.sellIn < 6) {
              this.incrementQuality(item);
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
              this.decrementQuality(item);
            }
          } else {
            item.quality = 0
          }
        } else {
          this.incrementQuality(item);
        }
      }
    }

    return this.items;
  }

  private decrementQuality(item: Item) {
    if (item.name != sulfurasHandOfRagnaros) {
      item.quality = item.quality - 1
    }
  }

  private incrementQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }
}
