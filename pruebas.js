/*var f = function f () {
    console.log('Hi');
    return true;
   }
   var f = function () {console.log('Boo');}
f.boo = 1;
f(); //outputs Boo
console.log(f.boo); 
*/

var user = function (ops) {
    return { firstName: ops.name || 'John'
    , lastName: ops.name || 'Doe'
    , email: ops.email || 'test@test.com'
    , name: function() { return this.firstName + this.lastName}
    }
   }
   var agency = function(ops) {
    ops = ops || {}
    var agency = user(ops)
    agency.customers = ops.customers || 0
    agency.isAgency = true
    return agency
   }