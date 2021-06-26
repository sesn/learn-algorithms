def linear_search(arr, n, x):
  for i in range(n):
    if arr[i] == x:
      return True
  return False

arr = [23,512,214,12,5,67,1,4,65]
result = linear_search(arr, len(arr), 214)
print('Search Element is found', result)
