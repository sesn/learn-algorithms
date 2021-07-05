import math
def mergeSort(arr):
  n = len(arr)

  mid = math.floor(n//2)

  leftArr = arr[:mid]
  rightArr = arr[mid:]

  mergeSort(leftArr)
  mergeSort(rightArr)

  i = j = k = 0



def printList(arr):
  print(" ".join([str(x) for x in arr]))

arr = [12, 11, 13, 5, 6, 7]
printList(arr)
mergeSort(arr)