from heapq import heappush, heappop, heapify

class MinHeap:
  def __init__(self):
    self.heap = []

  def parent(self, i):
    return (i-1)/2