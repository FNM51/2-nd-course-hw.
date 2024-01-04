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
    userAge = int(input("Сколько вам лет?"))
    if userAge > 0:
        if userAge <= 12:
           print('Привет, друг!')
        else:
           print('Добро пожаловать!')
    else:
       print("Вы ввели неправильное значение")
checkUserAge()