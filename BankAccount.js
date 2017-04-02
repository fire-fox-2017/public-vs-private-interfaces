'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    //
    this._name = customer_name;
    this._type = type;
    this._number = acct_number;
  }

  get account_number () {
    //
    return this._number;
  }

  set account_number (newNummber) {
    this._number = newNumber;
  }

  get costName () {
    return this._name;
  }

  set costName (newName) {
    this._name = newName;
  }

  get account_type () {
    return this._type;
  }

  set account_type (newType) {
    this._type = newType;
  }

  to_string () {
    //
    console.log(`"${this._name}: ${this._type}# ${this._number}"`);
  }

  cover_digits () {
    /*
    let num = this._number.slice(8);
    let hideNum = this._number.split('').join("").slice(0,8).replace(/[0-9]/g,"*")

    console.log(`"${this._name}: ${this._type}# ${hideNum}${num}"`);
    */
    let hideNum = this._number.replace(/\d{3}-\d{3}/, '***-***')
    console.log(`${this._name}: ${this._type}# ${hideNum}`);
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
