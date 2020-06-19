import { Component,  } from '@angular/core';
import { IElement} from './element.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})


export class GalleryComponent  {


  public elements: IElement[] = [
  {id: 1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis', elementsrc: `../assets/image/1.jpg`, },
  {id: 2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis', elementsrc: '../assets/image/2.jpg' },
  {id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis", elementsrc: '../assets/image/3.jpg' },
  {id: 4, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis", elementsrc: '../assets/image/4.jpg' },
  {id: 5, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis", elementsrc: '../assets/image/5.jpg' },
  {id: 6, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis", elementsrc: '../assets/image/6.jpg' },
  {id: 7, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis", elementsrc: '../assets/image/7.jpg' },
  
  {id: 8, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis", elementsrc: '../assets/image/7.jpg' },
  
  ]
  

}
