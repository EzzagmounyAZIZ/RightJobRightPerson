import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Offer } from './Offer';
import { CompanyInfo } from './CompanyInfo';
import { OfferInfo } from './OfferInfo';

@Component({
  selector: 'app-right-job-home',
  standalone: true,
  imports: [CommonModule,FormsModule ,MatIconModule],
  templateUrl: './right-job-home.component.html',
  styleUrl: './right-job-home.component.css'
})
export class RightJobHomeComponent implements OnInit{

  offerInfo:OfferInfo[]=[
    {ID:'',    OfferID:''}
  ];

  proposOffreEmploi :OfferInfo[] = [];

  infocompany: CompanyInfo[] =[
   {ID:1, CompanyName:'ATM-VIEW1',typeCompany:'International',ContryCompany:'morocco',CityCompany:'casablanca',WebsiteCompany:'https://www.atm-view.com/',Image:'https://www.atm-view.com/images/Logo.png',CompanyDescription:'Atm-View 360° monitoring solution aims essentially to improve the availability of your ATMs fleet . Atm-View offers a highly technological, modular and flexible'},
   {ID:2, CompanyName:'ATM-VIEW2',typeCompany:'International',ContryCompany:'morocco',CityCompany:'casablanca',WebsiteCompany:'https://www.atm-view.com/',Image:'https://www.bmci.ma/wp-content/themes/bmci/img/logo-banque.png',CompanyDescription:'Atm-View 360° monitoring solution aims essentially to improve the availability of your ATMs fleet . Atm-View offers a highly technological, modular and flexible'},
   {ID:3, CompanyName:'ATM-VIEW3',typeCompany:'International',ContryCompany:'morocco',CityCompany:'casablanca',WebsiteCompany:'https://www.atm-view.com/',Image:'https://www.capgemini.com/fr-fr/wp-content/themes/capgemini2020/assets/images/logo-white.svg',CompanyDescription:'Atm-View 360° monitoring solution aims essentially to improve the availability of your ATMs fleet . Atm-View offers a highly technological, modular and flexible'},
   {ID:4, CompanyName:'ATM-VIEW4',typeCompany:'International',ContryCompany:'morocco',CityCompany:'casablanca',WebsiteCompany:'https://www.atm-view.com/',Image:'logocompany',CompanyDescription:'Atm-View 360° monitoring solution aims essentially to improve the availability of your ATMs fleet . Atm-View offers a highly technological, modular and flexible'},
   {ID:5, CompanyName:'ATM-VIEW5',typeCompany:'International',ContryCompany:'morocco',CityCompany:'casablanca',WebsiteCompany:'https://www.atm-view.com/',Image:'logocompany',CompanyDescription:'Atm-View 360° monitoring solution aims essentially to improve the availability of your ATMs fleet . Atm-View offers a highly technological, modular and flexible'},
   {ID:6, CompanyName:'ATM-VIEW6',typeCompany:'International',ContryCompany:'morocco',CityCompany:'casablanca',WebsiteCompany:'https://www.atm-view.com/',Image:'logocompany',CompanyDescription:'Atm-View 360° monitoring solution aims essentially to improve the availability of your ATMs fleet . Atm-View offers a highly technological, modular and flexible'},
  ];

  offers: Offer[] = [
    // Sample data, replace with your actual data
    {ID:1, title: 'Software engineer', company: 'ATM-VIEW1', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:1},
    {ID:2, title: 'Software engineer', company: 'ATM-VIEW2', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:2},
    {ID:3, title: 'Software engineer', company: 'ATM-VIEW3', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:3},
    {ID:4, title: 'Software engineer', company: 'ATM-VIEW4', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:4},
    {ID:5, title: 'Software engineer', company: 'ATM-VIEW5', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024',companyId:5 },
    {ID:6, title: 'Software engineer', company: 'ATM-VIEW6', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:6},
    {ID:7, title: 'Software engineer', company: 'ATM-VIEW7', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:7},
    {ID:8, title: 'Software engineer', company: 'ATM-VIEW8', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:8},
    {ID:9, title: 'Software engineer', company: 'ATM-VIEW9', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:9},
    {ID:10, title: 'Software engineer', company: 'ATM-VIEW10', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024',companyId:10},
    {ID:11, title: 'Software engineer', company: 'ATM-VIEW', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:11},
    {ID:12, title: 'Software engineer', company: 'ATM-VIEW', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:12},
    {ID:13, title: 'Software engineer', company: 'ATM-VIEW', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:13},
    {ID:14, title: 'Software engineer', company: 'ATM-VIEW', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024',companyId:14 },
    {ID:15, title: 'Software engineer', company: 'ATM-VIEW', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024',companyId:15 },
    {ID:16, title: 'Software engineer', company: 'ATM-VIEW', Country: 'morroco', City:'casablanca', contractType: 'Hébride', date: '19/04/2024' ,companyId:16},
    // Add more offer objects as needed
  ];
  displayedOffers: Offer[] = [];
  currentIndex = 0;
  offersPerPage = 4;
  selectedOffer: Offer | null = null;
  selectedIndex = 0;

  displayedCompanyInfo: CompanyInfo | null = null;


  ngOnInit() {
    this.updateDisplayedOffers();  // Call this method to initialize offers on component load
  }

  updateDisplayedOffers() {
    this.displayedOffers = this.offers.slice(this.currentIndex, this.currentIndex + this.offersPerPage);
    this.selectFirstOffer();  // Select the first offer every time the displayed offers are updated
  }

  selectFirstOffer() {
   /* if (this.displayedOffers.length > 0) {
      this.selectedOffer = this.displayedOffers[0];
      this.selectedIndex = 0;
    }*/
    if (this.displayedOffers.length > 0) {
      this.selectedOffer = this.displayedOffers[0];
      this.selectedIndex = 0;
      this.updateDisplayedCompanyInfo(this.selectedOffer.companyId);
    }
  }
  updateDisplayedCompanyInfo(companyId: number) {
    this.displayedCompanyInfo = this.infocompany.find(company => company.ID === companyId) || null;
  }

  nextOffers() {
    if (this.currentIndex + this.offersPerPage < this.offers.length) {
      this.currentIndex += this.offersPerPage;
      this.updateDisplayedOffers();
    }
  }

  previousOffers() {
    if (this.currentIndex - this.offersPerPage >= 0) {
      this.currentIndex -= this.offersPerPage;
      this.updateDisplayedOffers();
    }
  }

  onOfferClick(offer: Offer, index: number): void {
    this.selectedOffer = offer;
    this.selectedIndex = index;
    this.displayedCompanyInfo = this.infocompany.find(company => company.ID === offer.companyId) || null;
  }



  constructor(private renderer: Renderer2, private el: ElementRef) { }
  navbaropened =false;

  openNav() {
/*
    let line1 = this.el.nativeElement.querySelector('.line1');
    let line2 = this.el.nativeElement.querySelector('.line2');
    this.renderer.setStyle(line1, 'transform', 'rotate(90deg)');
    this.renderer.setStyle(line2, 'transform', 'rotate(90deg)');
*/
    let container = this.el.nativeElement.querySelector('.container');
    this.renderer.setStyle(container, 'display', 'block');


    let main = this.el.nativeElement.querySelector('#main');
    this.renderer.setStyle(main, 'display', 'none');

    this.navbaropened=true;
  }

  closeNav() {
/*
    let line1 = this.el.nativeElement.querySelector('.line1');
    let line2 = this.el.nativeElement.querySelector('.line2');
    this.renderer.setStyle(line1, 'transform', 'rotate(50deg)');
    this.renderer.setStyle(line2, 'transform', 'rotate(-50deg)');
*/
    this.navbaropened=false;
  }

  display(){
    this.navbaropened =true;

    let container = this.el.nativeElement.querySelector('.container');
    this.renderer.setStyle(container, 'display', 'none');


    let main = this.el.nativeElement.querySelector('#main');
    this.renderer.setStyle(main, 'display', 'flex');
  }
}
