def counting_sort(arr):
  output = [0 for i in range(len(arr))]

  count = [0 for i in range(256)]

  ans = ["" for _ in arr]

  for i in arr:
    count[ord(i)] += 1

  # print(count)

  # Build the output character array
  for i in range(256):
    count[i] += count[i-1]

  # print(count)

  for i in range(len(arr)):
    output[count[ord(arr[i])] - 1] = arr[i]
    count[ord(arr[i])] -= 1

  return "".join([x for x in output])

def printList(arr):
  print("".join([str(x) for x in arr]))

arr = "geeksforgeeks"
printList(arr)

printList(counting_sort(arr))