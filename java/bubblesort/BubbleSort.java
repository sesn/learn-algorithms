class BubbleSort {

  void bubblesort(int[] arr) {
    int n = arr.length;
    for(int i=0; i<n-1 ;i++) {
      for(int j=0; j < n-1; j++ ) {
        if(arr[j] > arr[j+1]) {
          int temp;
          temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    this.printArray("Sorted Array", arr);
  }

  void printArray(String name,int[] tempArr) {
    System.out.print("Input Array\t");
    for(int i=0;i<tempArr.length;i++) {
      System.err.print(tempArr[i] + " ");
    }
    System.out.println();
  }

  public static void main(String[] args) {
    BubbleSort bs = new BubbleSort();
    int inputArr[] = {5,12,3,89,1,20};
    bs.printArray("Sorted Array", inputArr);
    bs.bubblesort(inputArr);
  }
}
