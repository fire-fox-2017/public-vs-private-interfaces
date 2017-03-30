'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
    this._acct_number = acct_number;
  }
  get customer_name () {
    return this._customer_name
  }
  get type () {
    return this._type
  }
  get account_number () {
    return this._acct_number
  }

  set customer_name (value){
    this._customer_name = value
  }
  set type (value){
    this._type = value
  }
  set account_number (value){
    this._acct_number = value
  }
  to_string () {
    console.log(`${this._customer_name}: ${this._type}# ${this._acct_number}`)
  }

  cover_digits () {
    var cover=this._acct_number.replace(/(\d{3})-(\d{3})-(\d{3})/, "***-***-$3");
    console.log(`${this._customer_name}: ${this._type}# ${cover}`)
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
