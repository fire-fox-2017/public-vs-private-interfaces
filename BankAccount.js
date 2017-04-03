'use strict'

//const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (cust_name, type, acct_number) {
    this._customer_name = cust_name;
    this._type = type;
    this._account_number = acct_number;
  }

  get customer_name () {
    return this._customer_name;
  }

  get type () {
    return this._type;
  }

  get account_number () {
    return this._account_number;
  }

  set customer_name (cust_name) {
    this._customer_name = cust_name;
  }

  set type (type) {
    this._type = type;
  }

  set account_number (acct_number) {
    return this._account_number = acct_number;
  }

  to_string () {
    console.log(`${this._customer_name}: ${this._type}# ${this._account_number}`);
  }

  cover_digits () {
    let covered = this.account_number.replace(/(\d{3})-(\d{3})-(\d{3})/g, `***-***-$3`);
    console.log(`${this._customer_name}: ${this._type}# ${covered}`);
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
