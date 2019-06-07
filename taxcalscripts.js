  $(function(){
     
        $("#error").hide();
        
        
  });
        
        
        
   var row = [];
       row[0] = []; 
  //row = dom row count 
function addSlab( n ) {  
   //n = number of slab
    var rowElement = [] ;
    var tr, td;


for (var j = 1; j <= n; j++) {
   
    var tbody = document.querySelector( "#tbody" );
    var tr = document.createElement( "tr" );
    
    for ( var i = 0; i < 3; i++ ) {
    			 
        var td = document.createElement( "td" );
        var input = document.createElement( "INPUT" ); 
		input.setAttribute( "type", "text" );
		input.setAttribute( "id",(row.length)+"-cell-"+i );
		input.setAttribute( "class", "form-control nrow" );
      
                td.appendChild( input );
                tbody.appendChild( tr );
                tr.appendChild( td );
        
                rowElement[ i ] = i;
                  
            if( i == 2 ) {
             
                var td = document.createElement( "td" );
                var span = document.createElement( "span" );
  
            	tr.appendChild( td );
                td.appendChild( span );
  
                var remButton = document.createElement( "button" );
		remButton.setAttribute( "id", "remButton" );  
		remButton.setAttribute( "class", "btn btn-danger" );
		remButton.textContent = "Delete";
 
                span.appendChild(remButton);
  
                remButton.onclick = function () { 					
                                        tbody.removeChild(tr); 
                                         alert(" only delete from bottom "); row.pop();
					};
                                       
            }
         
         
    }
        // alert("row inserted");
        row.push( rowElement );
        console.log( row );
       
 }
 
     if( n == 3 )
    {
        //  n = slabDemo.length;
        var slabDemo = [ [0, 100000, 0], [100000, 250000, 5], [250000, 500000, 10], [500000, 1000000, 15] ];
        var n =  slabDemo.length-1;
        //alert(n);
 
        for( var k=0; k <= n; k++ ) {
           
            for( var j=0; j <3; j++ ) { 
                    document.getElementById( k+"-cell-"+j ).value = slabDemo[ k ][ j ] ;
                  
                }
              
        }
 
    }
 

}

    var appTaxinc = []; 
 
function calculateTax() {
       
        // debugger;
        var slab = [];
        var tax = 0;
        var income =  document.getElementById("income").value;


        for( var k=0; k <row.length; k++ )  {
                 
                    var slabElement = []; 
          
                        for( var l=0; l <3; l++ )  {
                                var cellValue = parseFloat(document.getElementById(k+"-cell-"+l).value);
                                slabElement.push( cellValue );  
                     }
                 
                        slab.push( slabElement );         
            }    
         
   
    //"There should not be any gap between slab"
for ( var y = 0; y < ((slab.length)-1); y++ ) {
    
    // alert(slab[y][1]);
    // alert(slab[y+1][0]);
    //comparing two slab 
        var a = slab[y][1];
        var b = slab[y+1][0];
    
         if (a !== b)  {
        alert( "There should not be any gap between slab" );
        }
    
}
    //tax should be in incremental 
    // console.log(appTaxinc);
      for(var i=0; i < appTaxinc.length - 1; i++ )  {  
          if(appTaxinc[i] >= appTaxinc[i+1] )  { 
              alert( "tax should be in incremental" );
          
          }
      }   
   
   
   
   
//console.log(slab);
    for(var y = 0; y < slab.length; y++) {
     
        var rangeFrom = slab[y][0];
        var rangeTo = slab[y][1] ;
        var appTax = slab[y][2] ;
      //  alert(rangeFrom+"from"+rangeTo+"to"+appTax+"tax");
        var appTax = slab[y][2] ;
        appTaxinc[y] = appTax;
                
            
        if(income <= rangeTo && income != 0) {
             tax = tax + ((income) * appTax/100);
             break;
        }
            
        else  if(income > rangeTo) {
              tax = tax + (rangeTo * appTax)/100;
               income = income - rangeTo;
             if (income < 0) {
                 income = 0;
             }
             
        }
        else if(income == 0) {
            tax="Please Enter Salary";
        }
        else {
            tax = 0;
        }
    
    
    }
       document.getElementById("result").innerHTML = tax;
}



    