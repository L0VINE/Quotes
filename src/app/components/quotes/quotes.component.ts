import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    // Quotes Array
    quotes:Quotes[]=[
        new Quotes('The purpose of our lives is to be happy.',' Dalai Lama','Cynthia Lovine', new Date(2021,6,19),10,0),
        new Quotes('Many of life’s failures are people who did not realize how close they were to success when they gave up','Thomas A. Edison','Loise Mulwa',new Date(2021,4,30),4,3),
        new Quotes('When we do the best we can, we never know what miracle is wrought in our life or the life of another','Helen Keller', 'Stella Muthoni',new Date(2020,7,23),3,4),
        new Quotes('Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.','Celine Dion', 'Muthuri Mutethia',new Date(2021,4,4),1,0),
        new Quotes('The way to get started is to quit talking and begin doing','Walt Disney','Brian Shadrack Owuor',new Date(2021,5,9),9,2),
        new Quotes('The big lesson in life, baby, is never be scared of anyone or anything.','Frank Sinatra', 'Chemutai',new Date(2021,4,12),1,0),
    ]
    
    //function for ading a new quote
    addNewQuote(quote: any) {
       
        this.quotes.push(quote)
      }

    //function for toggling small text
    toggleDetails(index: any) {
        
        this.quotes[index].showDetails = !this.quotes[index].showDetails;
      }  

    //function for deleting quote

    deletingQuote(deleteQuote: any, index: any){
        if(deleteQuote){
            let toDelete =confirm("Are you sure you want to delete this quote?")

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }

    //function for getting the quote with the highest upvotes
    // initialValue:number
    // newValue:number
    // counter:number
    
    // highlightHighest(){

    //    this.initialValue=0
    //    this.newValue=0

    //    for (this.counter=0; this.counter<this.quotes.length; this.counter++){
    //        this.newValue =this.quotes[this.counter].upVote;

    //        if(this.newValue > this.initialValue){
    //            this.initialValue =this.newValue
    //        }
    //        return this.initialValue
    //    }


    // }
    
    highlightHighest() {
        
        let quotesUpvote = []
        let highestUpVote: number
        for (let j = 0; j < this.quotes.length; j++) {
          quotesUpvote.push(this.quotes[j].upVote)
        }
        
            //The sort callback has to return

            // a negative number if a < b
            // 0 if a === b
            // a positive number if a > b

        quotesUpvote.sort(function (a, b) {
            //if b>a then b-a>0 and will return a positive number
          return b - a
        })
        highestUpVote = quotesUpvote[0]
        return highestUpVote;
      }
    
      
  constructor() { }

  ngOnInit(): void {
  }

}
