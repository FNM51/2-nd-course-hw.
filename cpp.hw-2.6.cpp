#include <iostream>
#include <string>
#include <map>
#include <math.h>
#include <unistd.h>
#include <algorithm>
#include <vector>

using namespace std;

int main() {
  cout << "Task 1" << endl;
  int numbers[] = {1, 5, 4, 10, 0, 3};
  int length = sizeof(numbers) / sizeof(numbers[0]);
  for (int i = 0; i < length; i++) {
      cout << numbers[i] << endl;
      if (numbers[i] == 10){break;}
  }
  cout << endl << "Task 2" << endl;
  int el = 4;
  for (int i = 0; i < length; i++) {
    if (numbers[i] == el) {
      cout << i << endl;
      break;
    }
  }
  cout << endl << "Task 3" << endl;
  string delimiter = ", ";
  string result = to_string(numbers[0]);
  for (int i = 1; i < length; i++) {
      result += delimiter + to_string(numbers[i]);
  }
  cout << result << endl;
  cout << endl << "Task 4" << endl;
  int arrOne[] {};
  for (int i=0; i < 6; i++){
    arrOne[i] = 1;
  }
  int len = sizeof(arrOne) / sizeof(arrOne[0]);
  for (int i = 0; i < len; i++) {
    cout << arrOne[i] << ", ";
  }
  cout << endl << "Task 5" << endl;
  int arrFirst[] {1, 1, 1};
  int arrSecond[] {2, 2, 2};
  int afl = sizeof(arrFirst)/sizeof(arrFirst[0]);
  int asl = sizeof(arrSecond)/sizeof(arrSecond[0]);
  int arr[afl + asl];
  for (int i = 0; i < afl + asl; i++){
    if (i < afl) {
      arr[i] = arrFirst[i];
    }
    else {
      arr[i] = arrSecond[i - afl];
    }
  }
  for (int i = 0; i < afl + asl; i++) {
    cout << arr[i] << ", ";
  }
  cout << endl << endl << "Task 6" << endl;
  string asorti[] {"9", "8", "7", "a", "6", "5"};
  length = sizeof(asorti) / sizeof(asorti[0]);
  sort(asorti, asorti + length);
  for (int i = 0; i < length; i++) {
    cout << asorti[i] << ", ";
  }
  cout << endl << endl << "Task 7" << endl;

  return 0;
}