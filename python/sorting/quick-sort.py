def partition(arr, start, end):
  pivot_index = end
  pivot = arr[end]

  while start < end:
    while start < len(arr) and arr[start] <= pivot:
      start += 1

    while arr[end] > pivot:
      end -= 1

    if(start < end):
      arr[start], arr[end] = arr[end], arr[end]
  
  arr[end], arr[pivot_index] = arr[pivot_index], arr[end]

  return end


def quickSort(arr, start, end):
  if (start < end):
    p = partition(arr, start, end)
    quickSort(arr, start, p-1)
    quickSort(arr, p+1, end)