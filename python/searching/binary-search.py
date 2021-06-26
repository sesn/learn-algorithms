import math

def binary_search(arr, l, r, x):
  if (r >= l):
    mid = l + math.floor((r-l)/2)

    if (arr[mid] == x):
      return mid
    
    if (arr[mid] > x):
      return binary_search(arr, l, mid - 1, x)
    
    if (arr[mid] < x):
      return binary_search(arr, mid + 1, r, x)

  return None

arr = [ 2, 3, 4, 50, 40 ]
arr.sort()
x = 2
result = binary_search(arr, 0, len(arr), x)
print('Search Element is found', result != None)