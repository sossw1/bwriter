import { Component } from '@angular/core';
import Note from '../interfaces/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Array<Note> = [
    {
      title: 'Note 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam minima cumque sequi pariatur accusantium voluptate adipisci totam, suscipit optio ratione asperiores eius.'
    },
    {
      title: 'Note 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maiores voluptate quas, natus porro voluptatibus libero mollitia doloremque eius eveniet consectetur? Molestiae consectetur voluptatibus quae qui tenetur quo nihil quibusdam facilis autem pariatur debitis sapiente aliquid corporis itaque incidunt provident, enim consequuntur nostrum tempore repellendus. Ullam molestiae perspiciatis iure quisquam ipsum facilis architecto, doloremque eius quae voluptate nesciunt vitae eos ea exercitationem labore omnis nostrum rem. Inventore ipsa sit similique adipisci odit culpa assumenda necessitatibus fuga vel ab.'
    },
    {
      title: 'Note 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem doloribus iste at ullam perspiciatis eveniet saepe veritatis, ipsum explicabo perferendis sapiente consequuntur numquam tempora nam, totam voluptatum architecto inventore dicta, minima ad. Tempore adipisci magni accusamus illo, assumenda nihil cupiditate, quia ab placeat obcaecati hic odio maxime aut dolorem! Reprehenderit, tempore nobis?'
    },
    {
      title: 'Note 4',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, quod qui nobis aliquid, est adipisci voluptatum illum nihil perspiciatis debitis magnam quae, laboriosam vero dolorum? Iste, aut quas. Id, aliquam ad eius consequuntur vel similique!'
    },
    {
      title: 'Note 5',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia corporis, sunt error molestiae ullam dolore itaque, hic aperiam quae laborum, maxime nam veniam autem impedit nemo id? Labore vero blanditiis ratione molestias deleniti impedit iure. Alias, a ex, quasi at debitis sed corrupti quis repellat nulla possimus similique? Praesentium a nulla eaque tenetur est.'
    },
  ];
}
