'use strict'

// const ACCT_NUMBER = new WeakMap()

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

  get account_number () {
    return this._acct_number;
  }

  set customer_name (customer_name) {
    this._customer_name = customer_name;
  }

  set type (type) {
    this._type = type;
  }

  set account_number (account_number) {
    this._acct_number = account_number;
  }

  to_string () {
    console.log(`${this._customer_name} : ${this._type}# ${this._acct_number}` );

  }

  cover_digits () {
    let hideNumber = this._acct_number.replace(/\d{3}-\d{3}/g, '***-***');
    this._acct_number = hideNumber;
    console.log(this._acct_number);
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')
let my_acct2= new BankAccount('Hacktivate', 'Checking', '333-555-777')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
