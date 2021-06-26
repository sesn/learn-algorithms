import math

def jump_search(arr, n, x):
  step = math.sqrt(n)

  prev = 0
  while (arr[min(step, n) < x]):
    prev = step;
    step += math.sqrt(n)
    if (prev >= n):
      return False

  while (arr[prev] < x):
    prev = prev + 1
    if (prev == min(step, n)):
      return False
  
  if (arr[prev] == x):
    return True
  
  return False

arr = [23,512,214,12,5,67,1,4,65]
arr.sort();
result = jump_search(arr, len(arr), 1)
print('Search Element is found', result)
