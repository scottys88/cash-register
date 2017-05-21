function showStaff() {
    var x = document.getElementById('staffMembers');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        x.style.display === 'none';
    } else {
        x.style.display = 'none';
    }
}


StaffMember = function(){
    this.staffName = document.getElementsByName('staff');
    for (var i=0, len=this.staffName.length; i<len; i++){
    this.staffName[i].onclick = function(){
    this.staffName = this.value;
    console.log(this.staffName);
    switch(this.staffName){
    case("Bob"):
      this.discountPercent = 10;
      console.log(this.discountPercent);
      discountPercent = 10;
    break;
    case("Susan"):
      this.discountPercent = 5;
      console.log(this.discountPercent);
    break;
    case("Scott"):
      this.discountPercent = 20;
      console.log(this.discountPercent);
    break;
      }
    }
  }
}
console.log(StaffMember.discountPercent);
// //function StaffMember(staffName,discountPercent){
// //loop to determine which radio button selected for staff
//     var staffName = document.getElementsByName('staff');
//     for (var i=0, len=staffName.length; i<len; i++){
//       staffName[i].onclick = function(){
//         this.staffName = this.value;
//         console.log(this.staffName)
// //switch statement to get percentage discount
//         switch(this.staffName){
//           case("Bob"):
//           this.discountPercent = 10;
//           console.log(this.discountPercent);
//           break;
//           case("Susan"):
//           this.discountPercent = 5;
//           console.log(this.discountPercent);
//           break;
//           case("Scott"):
//           this.discountPercent = 20;
//           console.log(this.discountPercent);
//           break;
//       }
//     }
//   }
// }

//var sally = new StaffMember("Sally",5);
//var bob = new StaffMember("Bob",10);
//var me = new StaffMember("Me",20);
// Create yourself again as 'me' with a staff discount of 20%


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        var eggsQty = document.getElementById("eggsQty").value
        if (eggsQty > 0){
          item = "eggs";
          console.log(item=="eggs");
          console.log(eggsQty + item);
        }
        var milkQty = document.getElementById("milkQty").value
        if (milkQty > 0){
          item = "milk";
          console.log(item=="milk");
          console.log(milkQty + item);
        }
        var magazineQty = document.getElementById("magazinesQty").value
        if (magazineQty > 0){
          item = "magazine";
          console.log(item=="magazine");
          console.log(magazineQty + item);
        }
        var chocolateQty = document.getElementById("chocolateQty").value
        if (chocolateQty > 0){
          item = "chocolate";
          console.log(item=="chocolate");
          console.log(chocolateQty + item);
        }

        switch (item){
        case "eggs": this.add(0.98 * eggsQty); break;
        case "milk": this.add(1.23 * milkQty); break;
        case "magazine": this.add(4.99 * magazineQty); break;
        case "chocolate": this.add(0.45 * chocolateQty); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // applyStaffDiscount: function(){
    // console.log(this.total);
    // this.total -= (this.total * StaffMember.discountPercent / 100);
    // console.log(StaffMember.discountPercent);
  }

    cashRegister.prototype = StaffMember();

  var applyStaffDiscount = function(){
  console.log(cashRegister.total);
  console.log(staffName.discountPercent);
  cashRegister.total -= (cashRegister.total * StaffMember.discountPercent / 100);
}
// Create a new method applyStaffDiscount here


//cashRegister.scan();
//cashRegister.scan('milk',1);
//cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount
//cashRegister.applyStaffDiscount(me);

// Show the total bill
var showBill = function(){
  var outputBill = document.getElementById("totalOutput");
  outputBill.innerHTML = 'Your bill is '+cashRegister.total.toFixed(2)
  console.log('Your bill is '+cashRegister.total.toFixed(2));
}
