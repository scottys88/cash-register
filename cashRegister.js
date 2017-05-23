

function showStaff() {
    var x = document.getElementById('staffMembers');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        x.style.display === 'none';
    } else {
        x.style.display = 'none';
    }
}


var StaffMember = {
    staffName: this.staffName,
    getStaffName: function (){
      var radios = document.getElementsByName('staff');
      for (var i=0, len= radios.length; i<len; i++){
        if(radios[i].checked){
          this.staffName = radios[i].value;
          break;
        }
      }
    },
      //this.name[i].onclick = function(){
      //this.name = this.value;

    staffDiscount: this.discountPercent,
    getStaffDiscount: function(){
      switch(this.staffName){
      case("Bob"):
        this.staffDiscount = 10;
      break;
      case("Susan"):
        this.staffDiscount = 5;
      break;
      case("Scott"):
        this.staffDiscount = 20;
      break;
      }
      return (this.staffDiscount);
    }


}

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
        var transactionLog = document.getElementById("receipt");
        transactionLog.innerHTML=this.lastTransactionAmount.toFixed(2);
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
        console.log("minus last transaction " + this.lastTransactionAmount);
        showBill();
    },
    // applyStaffDiscount: function(){
    // console.log(this.total);
    // this.total -= (this.total * StaffMember.discountPercent / 100);
    // console.log(StaffMember.discountPercent);
  }



var applyStaffDiscount = function(){
  StaffMember.getStaffName();
  StaffMember.getStaffDiscount();
  console.log(StaffMember.staffDiscount);
  cashRegister.total -= (cashRegister.total * StaffMember.staffDiscount / 100);
  var outputBill = document.getElementById("totalOutput");
  outputBill.innerHTML = 'Your bill is '+cashRegister.total.toFixed(2)+ " using staff discount from " + StaffMember.staffName;
  console.log('Your bill is '+cashRegister.total.toFixed(2));
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
