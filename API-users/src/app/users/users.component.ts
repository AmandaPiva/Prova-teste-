import { UsersService } from './../users.service'; //importando nosso serviço
import { Component, OnInit } from '@angular/core';
import { InterUsers } from '../users';  //importando a interface


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: InterUsers[]=[]; //criando uma propriedade que pode ou não ser obrigatório que trás a nossa interface

  constructor(private usersService: UsersService) { } //injetando no construtor o nosso serviço

  //image location
  ImagePath = '/assets/imgs/image.svg';

  ngOnInit(): void {
    this.usersService.ObserUsers()
      .subscribe(inter => this.user = inter);
  }
}
