import { Component } from '@angular/core';
import { InchToCmPipe } from '../../inch-to-cm.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [InchToCmPipe, FormsModule],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css',
})
export class CustomPipeComponent {
  inchesInput: number = 0;
}
