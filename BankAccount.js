'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    //
    this.customer_name=customer_name;
    this.type=type;
    this._account_number=acct_number;
  }

  get account_number () {
    //
    return this._account_number;
  }

  to_string () {
    //
    console.log(`${this.customer_name} : ${this.type}# ${this.account_number}`);
  }

  cover_digits () {
    //
     let hasil=this._account_number.replace((/(\d{3})-(\d{3})-(\d{3})/),"***-***-$3");
     console.log(hasil)
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
