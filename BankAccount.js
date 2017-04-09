'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this._name = customer_name;
    this._type = type;
    this._number = acct_number;
  }
  /*  get name() {
      return this._name;
    }
    get type(){
      return this._type;
    }

    set name(customer_name) {
      this._name = customer_name;
    }
    set type(type){
      this._type = type;
    } */

  get account_number () {
    return this._number;
  }

  to_string () {
    console.log(this._name + ": " + this._type + "# " + this._number);
  }

  cover_digits () {

    var split = this._number.split("-");
    for (var i = 0; i < split.length -1; i++){
    split[i] = split[i].replace(/[0-9]/g,"*");

    }


  console.log(this._name + ": " + this._type + "# " + split.join("-"));
  }

}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
