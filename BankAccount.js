'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
     this._nama = customer_name;
     this._type = type;
     this._acct = acct_number;
    //
  }

  get account_number () {
    //
    return this._acct;
  }

  to_string () {
    //
    console.log(this._nama+": "+this._type+"# "+this._acct);
  }

  cover_digits () {
    //
    let secure = '';
    secure = this._acct.replace(/(\d{3})-(\d{3})-(\d{3})/gi, '***-***-$3');
    console.log(this._nama+": "+this._type+"# "+secure);
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
