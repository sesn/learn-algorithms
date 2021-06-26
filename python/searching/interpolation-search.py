import math

def interpolation_search(arr, lo, hi, x):
  if (lo <= hi and x >= arr[lo] and x <= arr[hi]):
    pos = lo + math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]))

    if (arr[pos] == x):
      return True

    if (arr[pos] < x):
      return interpolation_search(arr, pos + 1, hi, x)

    if (arr[pos] > x):
      return interpolation_search(arr, lo, pos - 1, x)

  return False

arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170]
arr.sort()
search_element = 110
result = interpolation_search(arr, 0, len(arr)-1, search_element)
print('Search Element is found', result)