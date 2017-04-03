'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
    this._acct_number = acct_number;
  }

  get customer_name () {
    return this._customer_name;
  }

  get type () {
    return this._type;
  }

  get acct_number () {
    return this._acct_number;
  }

  set customer_name(name) {
    this._customer_name = name;
  }

  set type(type) {
    this._type = type;
  }

  set acct_number(account_number) {
    this._acct_number = account_number;
  }

  to_string () {
    return console.log(`${this._customer_name}: ${this._type}# ${this._acct_number}`);
  }

  cover_digits () {
    let pattern = /(\d{3})-(\d{3})-(\d{3})/;
    let hidden = this._acct_number.replace(pattern, `***-***-$3`);

    return hidden;
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.acct_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"
//
// // release 1
console.log(my_acct.cover_digits()); // "Hacktivate: Checking# ***-***-888"
