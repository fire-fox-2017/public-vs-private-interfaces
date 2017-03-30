'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    //
    this._customer_name=customer_name;
    this._type=type;
    this._acct_number=acct_number;
  }

  get account_number () {
    //
    return this._acct_number;
  }

  to_string () {
    //
    return `${this._customer_name}: ${this._type} # ${this._acct_number}`;
  }

  cover_digits () {
    //
    let temp=this._acct_number;
    temp="xxx-xxx-"+temp.slice(8,temp.length);
    return `${this._customer_name}: ${this._type} # ${temp}`;
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
console.log(my_acct.to_string()) // "Hacktivate: Checking# 333-555-888"

// release 1
console.log(my_acct.cover_digits()) // "Hacktivate: Checking# ***-***-888"
