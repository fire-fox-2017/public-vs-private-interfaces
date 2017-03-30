'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
    this._acct_number = acct_number;
  }

  set name(newName){
    this._customer_name = newName;
  }

  set tipe(newType){
    this._type = newType;
  }

  set account(newNumber){
    this._acct_number = newNumber;
  }

  get name(){
    return this._customer_name;
  }

  get tipe(){
    return this._type;
  }

  get account_number () {
    return this._acct_number;
  }

  to_string () {
    console.log(`${my_acct.name}: ${my_acct.tipe}# ${my_acct.account_number}`);
  }

  cover_digits () {
    console.log(`${my_acct.name}: ${my_acct.tipe}# ***-***-` + my_acct.account_number.slice(8));
    console.log(`${my_acct.name}: ${my_acct.tipe}# ${my_acct.account_number.replace(/(\d{3})-(\d{3})-(\d{3})/gi,'***-***-$3')}`);
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888');

console.log(my_acct);
console.log(my_acct.account_number);

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
