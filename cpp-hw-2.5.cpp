#include <iostream>
#include <string>
#include <map>
#include <math.h>
#include <unistd.h>

using namespace std;

bool typeInt(string userInput) {
  try {
    stoi(userInput);
    return true;
  } catch (const invalid_argument& e) {
    return false;
  }
};

//Task #1
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
//Task #2
void parity(int number) {
  if (number % 2 == 0) {
      cout << "Число четное" << endl;
  } else {
      cout << "Число нечетное" << endl;
  };
};
//Task #3
void root(int number) {
  cout << sqrt(number) << endl;
}
//Task #4
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
//Task #5
void multiTwoNumbers(string number3, string number4) {
  if (typeInt(number3) && typeInt(number4)){
    int result = stoi(number3) * stoi(number4);
    cout << result << endl;
  } else {
    cout << "Одно или оба значения не являются числом" << endl;
  }
}
//Task #6
void cube() {
  string userNumber;
  cout << "Введи число: ";
  getline(cin, userNumber);
  sleep(3);
  if (typeInt(userNumber)){
    int result = pow(stoi(userNumber), 2);
    cout << result << endl;
  } else {
    cout << "Переданный параметр не является числом" << endl;
  }
}
//Task #7
void getArea(int radius){
  float result = pow(radius, 2) * M_PI;
  cout << result << endl;
}
void getPerimeter(int radius){
  float result = radius * M_PI * 2;
  cout << result << endl;
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
  //Task #5
  cout << "Введи первое число: ";
  string number3;
  getline(cin, number3);
  sleep(3);
  cout << "Введи второе число: ";
  string number4;
  getline(cin, number4);
  sleep(3);
  multiTwoNumbers(number3, number4);
  //Task #6
  cube();
  //Task #7
  map<string, int> circle1 = {
      { "radius", 12 }
  };
  map<string, int> circle2 = {
      { "radius", 16 }
  };
  getArea(circle1["radius"]);
  getPerimeter(circle1["radius"]);
  getArea(circle2["radius"]);
  getPerimeter(circle2["radius"]);
  return 0;
}