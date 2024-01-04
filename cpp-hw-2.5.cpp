#include <iostream>
#include <string>
#include <map>
#include <math.h>

using namespace std;

void findLess(int number1, int number2){
  if (number1 == number2) {
      cout << number1 << endl;        
  } else if (number1 > number2){
      cout << number2 << endl;
  } else if (number1 < number2){
      cout << number1 << endl;
  } else {
      cout << "ERROR" << endl;
  }
}

void parity(int number) {
  if (number % 2 == 0) {
      cout << "Число четное" << endl;
  } else {
      cout << "Число нечетное" << endl;
  };
};

void root(int number) {
  cout << sqrt(number) << endl;
}

void checkUserAge() {
  cout << "Сколько вам лет?" << endl;
  short userAge;
  cin >> userAge;
  if (userAge > 0) {
    if (userAge <= 12) {
      cout << "Привет, друг!" << endl;
    } else {
      cout << "Добро пожаловать!" << endl;
    }
  } else {
      cout << "Вы ввели неправильное значение" << endl;
  };
}

int main() {
  //Task #1
  findLess(8, 4);
  findLess(4, 8);
  findLess(6, 6);
  //Task #2
  int userNumber;
  cout << "Пожалуйста, введите любое число: ";
  cin >> userNumber;
  parity(userNumber);
  //Task #3
  root(5);
  //Task #4
  checkUserAge();
  return 0;
}