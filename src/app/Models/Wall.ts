import {Title} from './Title';
import {Description} from './Description';
import {Image} from './Image';
import {Material} from './Material';

export class Wall {
  id: number;
  date: number;
  authorId: number;
  address: string;
  year: number;
  photographer: string;
  author: string;
  title: Title;
  description: Description;
  material: Material;
  images: Array<Image>;
}
