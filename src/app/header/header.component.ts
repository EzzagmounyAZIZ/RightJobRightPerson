import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  homePage() {
    this.router.navigate(['home']);
  }

  constructor(private router: Router,private modalService: NgbModal) {}

  popUp(action: string) {
    let modalData: any = {};

    switch (action) {
      case 'Guide':
        modalData.title = 'Guide';
        modalData.cards = [
          { title: 'Right Job (find your right job)', content: 'Welcom to your guide to now how to serch job.', route: 'guide/RightJob' , logo:'cv' },
          { title: 'Right Person (find right person for job)', content: 'Welcom to your guide to now how to serch right person for job.', route: 'guide/RightPerson' , logo:'humanResource' }
        ];
        break;
      case 'Sign In':
        modalData.title = 'Sign In';
        modalData.cards = [
          { title: 'Sign In (find right Job)', content: 'Welcom in your Sign In page To find Right Job.', route: 'Sign_In/RightJob', logo:'cv'  },
          { title: 'Sign In (find right Person)', content: 'Welcom in your Sign In page To find Right person for Job.', route: 'Sign_In/RightPerson' , logo:'humanResource' }
        ];
        break;
      case 'Sign Up':
        modalData.title = 'Sign Up';
        modalData.cards = [
          { title: 'Sign Up (find right Job)', content: 'Welcom in your Sign Up page To find Right Job.', route: 'Sign_Up/RightJob', logo:'cv'  },
          { title: 'Sign Up (find right Person)', content: 'Welcom in your Sign Up page To find Right person for Job.', route: 'Sign_Up/RightPerson' , logo:'humanResource' }
        ];
        break;
      default:
        modalData.title = '';
        modalData.cards = [];
    }

    if (modalData.title) {
      const modalRef = this.modalService.open(PopupComponent);
      modalRef.componentInstance.modalData = modalData;
    }

    }

}
