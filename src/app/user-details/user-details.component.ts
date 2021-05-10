import { Component, OnInit } from '@angular/core';

export interface UserDetails {
  name: string;
  accountNumber: number;
  country: string;
  DOJ: string;
  age: number;
  gender: string;
}
const ELEMENT_DATA: UserDetails[] = [
  {name: 'John', accountNumber: 1234567, country: 'India',DOJ:'15 Jan 2020',age:30,gender:'M'},
  {name: 'Paul', accountNumber: 2345678, country: 'Brazil',DOJ:'27 Feb 2020',age:22,gender:'M'},
  {name: 'Rino', accountNumber: 3456781, country: 'UK',DOJ:'22 Mar 2020',age:31,gender:'M'},
  {name: 'Jack', accountNumber: 4567812, country: 'Japan',DOJ:'30 April 2020',age:38,gender:'M'},
  {name: 'Rahul', accountNumber: 5678912, country: 'India',DOJ:'27 May 2020',age:30,gender:'M'},
  {name: 'Peter', accountNumber: 6789123, country: 'India',DOJ:'18 June 2020',age:39,gender:'M'},
  {name: 'Josin', accountNumber: 7891234, country: 'India',DOJ:'22 July 2020',age:40,gender:'M'},
  {name: 'Kevin', accountNumber: 8912345, country: 'India',DOJ:'11 August 2020',age:27,gender:'M'},
  {name: 'Johnny', accountNumber: 91234567, country: 'India',DOJ:'10 Sept 2020',age:29,gender:'M'},
  {name: 'Jacob', accountNumber: 87654326, country: 'India',DOJ:'14 Nov 2020',age:25,gender:'M'},
];
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  sName : string;
  sAccountNumber : number;
  sCountry : string ;
  sDoj : string;
  sAge : number;
  sGender: string;

  displayedColumns: string[] = ['name', 'accountNumber', 'country', 'DOJ'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

  getuserRecord(row:UserDetails){
    this.sName = row.name;
    this.sAccountNumber = row.accountNumber;
    this.sCountry = row.country;
    this.sDoj = row.DOJ;
    this.sAge = row.age;
    this.sGender = row.gender;
  }

}
