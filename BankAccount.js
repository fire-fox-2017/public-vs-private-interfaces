'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this.customer_name=customer_name;
    this.type=type;
    this._acct_number=acct_number;
    //
  }

  get account_number () {
    return this._acct_number;
    //
  }

  to_string () {
    console.log(`${this.customer_name}: ${this.type}# ${this._acct_number}`);
    //
  }

  cover_digits () {
    // let temp = '***-***-'+this._acct_number.slice(8,11);
    let temp = this._acct_number.replace(/(\d{3})-(\d{3})-(\d{3})/gi,'***-***-$3');

    console.log(`${this.customer_name}: ${this.type}# ${temp}`);
    //
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
