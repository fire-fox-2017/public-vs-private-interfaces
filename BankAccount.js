'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    //
    this._customer_name= customer_name;
    this._type= type;
    this._acct_number = acct_number;
  }

  get acct_number () {
    //
    return this._acct_number;

  }
  set acct_number(number){
      this._acct_number= number;
  }
  to_string () {
    //
    console.log(this._customer_name+ ' : ' + this._type+ ' # '+ this._acct_number)
  }

  cover_digits () {
    //
    var newAccount = this._acct_number.split('-');
    for (var i=0 ; i < newAccount.length ; i ++){
      newAccount[i]= newAccount[i].replace(/[0-9]/g,'*');
    }
    console.log(this._customer_name+ ' : ' + this._type+ ' # '+ newAccount.join('-'));
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.acct_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
