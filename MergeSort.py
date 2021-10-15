def mergeSort(arr):
    # return when number of elements in arr <= 1
    if len(arr) > 1:
        # find out mid element and divide the array into two halves
        m = len(arr) // 2
        leftArr = arr[0:m]
        rightArr = arr[m:len(arr)]

        # merge sort the two sub arrays
        mergeSort(leftArr)
        mergeSort(rightArr)

        # merge left and right sub arrays
        merge(leftArr, rightArr, arr)


def merge(leftArr, rightArr, arr):
    # apply index i for leftArr, j for rightArr, k for arr
    i = j = k = 0;

    # while indices of either one sub arrays have not reached the end,
    # assign data from two sub arrays with increasing numbers
    while i < len(leftArr) and j < len(rightArr):
        if (leftArr[i] <= rightArr[j]):
            arr[k] = leftArr[i]
            i += 1
        else:
            arr[k] = rightArr[j]
            j += 1
        k += 1

    # for sub array with index not reaching the end, assign the remaining data to the merged arr
    if (i < len(leftArr)):
        while i < len(leftArr):
            arr[k] = leftArr[i]
            i += 1
            k += 1
    else:
        while j < len(rightArr):
            arr[k] = rightArr[j]
            j += 1
            k += 1


arr = [12, 44, 13, 88, 23, 94, 11, 39, 20]
print(f"Origianl array:{arr}")
mergeSort(arr)
print(f"Merge sorted array:{arr}")


