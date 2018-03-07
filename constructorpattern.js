/* Constructor Pattern*/

function Person(name,id){   
      this.fullname = name;   
      this.id = id;   
      this.print = function(){   	
          console.log(this.id);    
          console.log(this.fullname);   
   }
 }
 var p1 = new Person('z',1);
 p1.print();
