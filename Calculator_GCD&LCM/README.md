# 최대공약수, 최소공배수 구하기 프로그램

## 구현 목표
- 두 수를 입력받고, 두 수의 최대공약수와 최소공배수를 계산하여 화면에 출력한다.

---
## 구현 로직

### Business Logic
1. 두 수를 입력받는다.
2. 두 수 중 더 큰 값과 작은 값을 구분한다.
3. 최대공약수를 계산하는 함수에 큰 값과 작은 값을 순서대로 인자로 전달한다.
4. 함수는 내부에서 큰 수 나누기 작은 수의 나머지가 0이 되면 작은 수를 반환하고,
5. 나머지가 0이 아니라면 작은 수와 나머지 값을 다시 나눈다.
6. 나머지가 0이 될때까지 4 - 5 번을 반복한다. (최대공약수)
7. 큰 수, 작은 수, 최대공약수를 순서대로 최대공배수를 구하는 함수에 전달한다.
8. (큰 수 * 작은 수) / 최대공약수 를 계산하고 결과값을 반환한다. (최소공배수)

### View Logic 
1. Business Logic 에서 계산된 결과(최대공약수, 최소공배수)를 받아온다.
2. 결과를 input 태그의 value 값에 할당한다.