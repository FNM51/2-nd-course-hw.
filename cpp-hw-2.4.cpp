#include <iostream>
#include <string>
#include <map>

using namespace std;

int main() {
  cout << "Task #1" << endl;
  for (char i = 0; i < 2; i++){
    cout << "Hello" << endl;
  };
  cout << endl << "Task #2" << endl;
  for (int i = 1; i <= 5; i++){
    cout << i << ", ";
  };
  cout << endl << endl << "Task #3" << endl;
  for (int i = 7; i <=22; i++){
    cout << i << ", ";
  };
  cout << endl;
  cout << endl << "Task #4" << endl;
  map<string, int> salary = {
      { "Kolya", 200 },
      { "Vasya", 300 },
      { "Petya", 400 }
  };
  for (const auto& prop : salary) {
          std::cout << "Salary " << prop.first << "'s = " << prop.second << " $" << endl;
  }
  cout << endl << "Task #5" << endl;
  int n = 1000;
  int i = 0;
  while (n > 50) {
    n = n / 2;
    i++;
  }
  cout << i << endl;
  cout << endl << "Task #6" << endl;
  for (signed int firstFriday = 1; firstFriday <= 31; firstFriday = firstFriday + 7){
    cout << "Сегодня пятница, " << firstFriday << "-е число. Необходимо подготовить отчет." << endl;
  }
  return 0;
}