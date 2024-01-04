import math

#Task 1
def findLess(number1, number2):
  int(number1)
  int(number2)
  if number1 == number2:
    return number1
  elif number1 > number2:
    return number2
  elif number1 < number2:
    return number1
  else:
    return 'Error'

print(findLess(8,4))
print(findLess(4,8))
print(findLess(6,6))

#Task 2
def parity(number):
  type = bool(number)
  if type:
      if number % 2 == 0:
          print('Число четное')
      else:
           print('Число нечетное')
  else:
      print('Это не число :-(')

userNumber = int(input('Пожалуйста, введите любое число: '))
parity(userNumber)

#Task 3
def root(number):
  print(math.sqrt(number))
root(5)

#Task 4
def checkUserAge():
  userAge = int(input("Сколько вам лет? "))
  if userAge > 0:
      if userAge <= 12:
         print('Привет, друг!')
      else:
         print('Добро пожаловать!')
  else:
     print("Вы ввели неправильное значение")
checkUserAge() 

#Task 5
def multiTwoNumbers(number1, number2):
  if isinstance(number1, int) and isinstance(number2, int):
    print(int(number1) * int(number2))
  else:
    print('Одно или оба значения не являются числом')

number1 = input("Введи первое число: ")
number2 = input("Введи второе число: ")
multiTwoNumbers(number1, number2)

#Task 6
def cube():
  userNumber = input("Введи число: ")
  if userNumber.isdigit():
    numberInCube = int(userNumber) ** 2
    print(str(userNumber) + ' в кубе равняется ' + str(numberInCube))
  else:
    print('Переданный параметр не является числом')
cube()

#Task 7
circle1 = {
  "radius" : 12,
  "getArea" : lambda : print(circle1["radius"] * circle1["radius"] * math.pi),
  "getPerimeter" : lambda : print(2 * circle1["radius"] * math.pi)
}
circle2 = {
  "radius" : 16,
  "getArea" : lambda : print(circle2["radius"] * circle2["radius"] * math.pi),
  "getPerimeter" : lambda : print(2 * circle2["radius"] * math.pi)
}
circle1["getArea"]()
circle1["getPerimeter"]()
circle2["getArea"]()
circle2["getPerimeter"]()