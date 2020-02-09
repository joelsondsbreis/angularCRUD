import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from './User';
import { ErrorMsg } from './ErrorMsg';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  modalRef: BsModalRef;
  user: User = new User();
  errorMsg: ErrorMsg = new ErrorMsg;
  constructor(private modalService: BsModalService, private userService: UserService ) { }

  ngOnInit() {
  }

  onSave() {
    this.errorMsg.name = this.errorMsg.address = '';
    !this.user.name ? this.errorMsg.name = 'Você precisa digitar o nome!' : '';
    !this.user.address ? this.errorMsg.address = 'Você precisa digitar o endereço!' : '';
    if(!this.user.name || !this.user.address) {
      return;
    }
    this.userService.post(this.user).subscribe(res => {
      this.modalRef.hide();
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  openModalAdd(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
