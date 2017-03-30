'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
    this._acct_number = acct_number;
  }

  get account_number () {
    return this._acct_number;
  }

  to_string () {
    console.log(`${this._customer_name}: ${this._type}# ${this._acct_number}`);
  }

  cover_digits () {
    var regex = /(\d{3}[-]\d{3}[-])/g;
    let cover = this._acct_number.replace(regex, "XXX-XXX-")
    console.log(`${this._customer_name}: ${this._type}# ${cover}`);
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
