import { Component } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent  {

 
  public elements= [
    {id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis, temporibus totam quo suscipit unde ad quam incidunt labore commodi, molestias eius accusantium" +
    "Reprehenderit voluptatum nesciunt adipisci perspiciatis error maiores, blanditiis eum saepe eveniet alias aspernatur accusamus ad, ut in nam cum quibusdam assumenda mollitia aliquam. Doloremque perferendis quaerat explicabo ea. Beatae, recusandae!"
   , elementsrc: '../assets/image/2.jpg' },
    {id: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis, temporibus totam quo suscipit unde ad quam incidunt labore commodi, molestias eius accusantium" +
    "Reprehenderit voluptatum nesciunt adipisci perspiciatis error maiores, blanditiis eum saepe eveniet alias aspernatur accusamus ad, ut in nam cum quibusdam assumenda mollitia aliquam. Doloremque perferendis quaerat explicabo ea. Beatae, recusandae!" , elementsrc: '../assets/image/3.jpg' },
    {id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis, temporibus totam quo suscipit unde ad quam incidunt labore commodi, molestias eius accusantium" +
    "Reprehenderit voluptatum nesciunt adipisci perspiciatis error maiores, blanditiis eum saepe eveniet alias aspernatur accusamus ad, ut in nam cum quibusdam assumenda mollitia aliquam. Doloremque perferendis quaerat explicabo ea. Beatae, recusandae!", elementsrc: '../assets/image/4.jpg' },
    {id: 4, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate minima veniam vero dolores ipsum quibusdam blanditiis, temporibus totam quo suscipit unde ad quam incidunt labore commodi, molestias eius accusantium" +
    "Reprehenderit voluptatum nesciunt adipisci perspiciatis error maiores, blanditiis eum saepe eveniet alias aspernatur accusamus ad, ut in nam cum quibusdam assumenda mollitia aliquam. Doloremque perferendis quaerat explicabo ea. Beatae, recusandae!", elementsrc: '../assets/image/5.jpg' },
    
  
     ]

}
