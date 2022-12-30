import { Component, OnInit } from '@angular/core';
import { DashService } from 'app/services/dash.service';
import Chart from 'chart.js';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  constructor(private dash:DashService){}

  public canvas : any;
  public ctx;
  public canvas1 : any;
  public ctx1;
  public canvas2 : any;
  public ctx2;
  public canvas3 : any;
  public ctx3;
  public canvas4 : any;
  public ctx4;
  public chartColor;
  public chartEmail;
  public chartHours;

  public totalCitation: number[] = []
  public Publisher : string[] = []

  public count: number[] = []
  public paysName : string[] = []
  public paysCitation : number[] = []

  public citationSum: number[] = []
  public pays : string[] = []

  public years : string[] = []
  public years_count : number[] = []

  public countries : string[] = []
  public pubNumber : number[] = []
  

  public total_article:any;
  public total_article_acm:any;
  public total_article_sd:any;
  public total_article_ieee:any;

    initChart(){
      // console.log(this.years_count)
// les années en fonction des citations
      this.canvas = document.getElementById("chartHours");
      this.ctx = this.canvas.getContext("2d");
      this.chartHours = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.years,
          datasets: [{
              borderColor: "#9BD000",
              backgroundColor: "#9BD000",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: this.years_count
            }],
          
        },
        options: {
          legend: {
            display: true
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{
              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5,
                //padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "#ccc",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent",
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }]
          },
        }
      });


      // line countries by publication number
      this.canvas2 = document.getElementById("chartEmail");
      this.ctx2 = this.canvas2.getContext("2d");
      this.chartHours = new Chart(this.ctx2, {
        type: 'line',
        data: {
          labels: this.years,
          datasets: [{
              borderColor: "#51CACc",
              backgroundColor: "#51CACF",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: this.years_count
            }],
          
        },
        options: {
          legend: {
            display: true
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{
              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5,
                //padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "#ccc",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent",
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }]
          },
        }
      });



     

      ///////////////////////
      // var speedCanvas = document.getElementById("speedChart");
      // var dataFirst = {
      //   data: this.citationSum,
      //   fill: false,
      //   borderColor: '#fbc658',
      //   backgroundColor: 'transparent',
      //   pointBorderColor: '#fbc658',
      //   pointRadius: 4,
      //   pointHoverRadius: 4,
      //   pointBorderWidth: 8,
      // };
      // var speedData = {
      //   labels: this.pays,
      //   datasets: [dataFirst]
      // };

      // var chartOptions = {
      //   legend: {
      //     display: false,
      //     position: 'top'
      //   }
      // };

      // var lineChart = new Chart(speedCanvas, {
      //   type: 'line',
      //   hover: false,
      //   data: speedData,
      //   options: chartOptions
      // });



       ///////////////////////// doughnut chart 

       var speedCanvas = document.getElementById("chartCountries");
 
 
       var dataFirst = {
         data: this.count,
         fill: false,
         borderColor: '#fbc658',
         backgroundColor: 'transparent',
         pointBorderColor: '#fbc658',
         pointRadius: 4,
         pointHoverRadius: 4,
         pointBorderWidth: 8,
       };
 
       var dataSecond = {
         data: this.paysCitation,
         fill: false,
         borderColor: '#51CACF',
         backgroundColor: 'transparent',
         pointBorderColor: '#51CACF',
         pointRadius: 4,
         pointHoverRadius: 4,
         pointBorderWidth: 8
       };
 
       var speedData = {
         labels: this.paysName,
         datasets: [dataFirst, dataSecond]
       };
 
       var chartOptions = {
         legend: {
           display: false,
           position: 'top'
         }
       };
 
       var lineChart = new Chart(speedCanvas, {
         type: 'line',
         hover: false,
         data: speedData,
         options: chartOptions
       });
     

       this.canvas4 = document.getElementById("chartPublisher");
       this.ctx4 = this.canvas4.getContext("2d");
       this.chartEmail = new Chart(this.ctx4, {
         type: 'pie',
         data: {
           labels:this.Publisher,
           datasets: [{
             label: "publisher",
             pointRadius: 0,
             pointHoverRadius: 0,
             backgroundColor: [
               'rgb(255, 99, 132)',
               '#4acccd',
               '#fcc468'
               
             ],
             borderWidth: 0,
             data: this.totalCitation
           }]
         },
 
         options: {
 
           legend: {
             display: false
           },
 
           pieceLabel: {
             render: 'percentage',
             fontColor: ['white'],
             precision: 2
           },
 
           tooltips: {
             enabled: false
           },
 
           scales: {
             yAxes: [{
 
               ticks: {
                 display: false
               },
               gridLines: {
                 drawBorder: false,
                 zeroLineColor: "transparent",
                 color: 'rgba(255,255,255,0.05)'
               }
 
             }],
 
             xAxes: [{
               barPercentage: 1.6,
               gridLines: {
                 drawBorder: false,
                 color: 'rgba(255,255,255,0.1)',
                 zeroLineColor: "transparent"
               },
               ticks: {
                 display: false,
               }
             }]
           },
         }
       });
 
 
     
    }



    ngOnInit(){
      this.chartColor = "#FFFFFF";
      this.getArticles();
      // get years and yours count
      this.dash.getCountsYear().subscribe((res:any)=>{
        for (let index = 1; index < res.length; index++) {
          this.years.push(res[index].Year);
          this.years_count.push(res[index].count);
        }
        console.log(this.years)
      });
      // get countries and citations
      this.dash.getCountruesCitation().subscribe((res:any)=>{
        for (let index = 0; index < res.length; index++) {
          this.citationSum.push(res[index].Citations);
          this.pays.push(res[index].Country);
        }
      });

            
        // countries by publication number
        this.dash.getCountruesCitation().subscribe((res:any)=>{
          for (let index = 0; index < res.length; index++) {
            this.countries.push(res[index].ountry);
            this.pubNumber.push(res[index].count);
          }
          console.log(this.countries)
        });


        ////////////////////////////////////
          
            this.dash.getcitation().subscribe((res:any)=>{
              for (let index = 0; index < res.length; index++) {
                this.paysName.push(res[index].Country);
                this.paysCitation.push(res[index].Citations);
                this.count.push(res[index].count);
              }
              console.log(this.paysCitation)
            });
      

            this.dash.getNumberOfPublisherBySite().subscribe((res:any)=>{
              for (let index = 0; index < res.length; index++) {
                this.Publisher.push(res[index].Publisher);
                this.totalCitation.push(res[index].Citations);
                
              }
            });
      

      setTimeout(() => this.initChart(), 2000);


    }

    // public totalCitation: number[] = []
    // public Publisher : string[] = []
    getArticles(){
      this.dash.getArticle().subscribe((res:any)=>{
        this.total_article=res.nb_articles;
        this.total_article_acm=res.nb_articles_acm;
        this.total_article_ieee=res.nb_articles_ieee;
        this.total_article_sd=res.nb_articles_science;
        console.log(res)
      })
    }
}
