import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-top-movies',
  templateUrl: './list-top-movies.component.html',
  styleUrls: ['./list-top-movies.component.scss'],
  styles: [`
  .dp-hidden {
    width: 0;
    margin: 0;
    border: none;
    padding: 0;
  }
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
  }
  .custom-day.focused {
    background-color: #e6e6e6;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: white;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
`]
})
export class ListTopMoviesComponent implements OnInit {
  hoveredDate: NgbDate | null = null;
  popmovielst :any
  topmovielst:any
  fromDate:  NgbDate | null = null;
  toDate:  NgbDate | null = null;
  fd:any
  td:any
  constructor(private adminService: AdminService,private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
   }
   movieslst :  NgbDate | null = null;
   popmoviest: NgbDate | null = null;

  ngOnInit(): void {
    
  }

  getTopPurchaseMovie(fromdate :any, todate:any){

  
    this.fd = new Date(fromdate.year, fromdate.month - 1, fromdate.day);
    this.td = new Date(todate.year, todate.month - 1, todate.day)
    var fdstr = this.fd.toISOString().slice(0,10);
    var tdstr =this.td.toISOString().slice(0,10);
     this.adminService.popularPurchaseMovieFromto(fdstr,tdstr).subscribe(data=>{
      console.log(data)
        this.popmovielst = data; 
     })
}

  getTopRatedMovies(){
      this.adminService.getTop30Movies().subscribe(data=>{
         this.topmovielst = data; 
      })
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) &&
        date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) { return this.toDate && date.after(this.fromDate) && date.before(this.toDate); }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) ||
        this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
