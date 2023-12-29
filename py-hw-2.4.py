# Это для себя

#Task #1
for i in range(2):
    print('Hi')

#Task #2
i = 1
while i <= 5:
    print(i)
    i = i + 1

#Task #3
i = 7
while i <= 22:
    print(i)
    i = i + 1

#Task #4
salary = {
  'Kolya' : 200,
  'Vasya' : 300,
  'Petya' : 400
}
for name in salary:
  print('Salary ' + name + "'s - " + str(salary[name]) + '$')

#Task #5
n = 1000
i = 0
while n > 50:
  n = n / 2
  i = i + 1
print(i)

#Task #6
for firstFriday in range(1,31,7):
  print('Сегодня пятница, ' + str(firstFriday) + '-е число. Необходимо подготовить отчет.')