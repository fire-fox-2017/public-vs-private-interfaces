'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this.customer_name = customer_name;
    this.type = type;
    this._acct_number = acct_number;
  }

  get acct_number () {
    return this._acct_number;
  }

  to_string () {
     console.log("Hacktivate: Checking# " + this._acct_number);
  }


  cover_digits () {
      var pisahsetrip = this._acct_number.split("-");
      for (var i = 0; i < pisahsetrip.length - 1; i++){
        pisahsetrip[i] = "***";
      }
      var hidden = pisahsetrip.join("-");
      console.log(hidden);
      }
  }


let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.acct_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
