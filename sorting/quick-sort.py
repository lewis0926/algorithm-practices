# start index and end index of the array for quick sort
def quickSort(arr, start, end):

    # end loop if start and end indices overlap
    if start < end:
        p = partition(arr, start, end)

        # divide the arr into two halves and quick sort recursively
        quickSort(arr, start, p)
        quickSort(arr, p + 1, end)


def partition(arr, start, end):
    # get pivot from the last element
    pivot = arr[end - 1]
    # i is index of small elements
    i = start - 1

    # loop through the part of array part we sort
    for j in range(start, end - 1):
        if arr[j] <= pivot:
            # i is to indicate last position of small elements
            # increase i by 1 when the element is swapped for updating the position
            i += 1
            # swap small element with large element (comparing to pivot)
            arr[i], arr[j] = arr[j], arr[i]

    # swap the element following the small elements with pivot at the end
    arr[i + 1], arr[end - 1] = arr[end - 1], arr[i + 1]
    return i + 1


arr = [12, 44, 13, 88, 23, 94, 11, 39, 20]
print(f"Original array:{arr}")
quickSort(arr, 0, len(arr))
print(f"Quick sorted array:{arr}")