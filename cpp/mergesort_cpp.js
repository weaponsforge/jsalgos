// https://compiler.run/

#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

// Get the array length of regular-declared arrays
#define arrayLength(array) (sizeof((array))/sizeof((array)[0]))

int* mergesort(int data[], int arrSize);
int* merge(int left[], int right[], int sizeLeft, int sizeRight);

// CPP implementation of the merge sort method
int main()
{
	int data[] = {1, 8, 7, 6, 5, 4, 3};
    int* sorted = mergesort(data, arrayLength(data));

	printf("DONE\n\n");

	for (int i = 0; i < 7; i++) {
	    printf("final: %d\n", sorted[i]);
	}
}

int* mergesort(int data[], int arrSize)
{
    printf("Starting mergesort, array size %d!\n", arrSize);

	if (arrSize == 1)
	{
	    printf("returning, size: %d, value: [%d]\n", arrSize, data[0]);
		return data;
	}

    // Define the middle
    int mid = round(arrSize / 2);

    // Declare the arbitrary-sized left and right arrays
    int left[mid];
    int right[arrSize - mid];

    // Extract the left side items
    for (int i = 0; i < mid; i++) {
        left[i] = data[i];
        printf("left: pushing %d, pushed: %d\n", data[i], left[i]);
    }

    // Extract the right side items
    for (int i = 0; i < (arrSize - mid); i++) {
        right[i] = data[mid + i];
        printf("right: pushing %d, pushed: %d\n", data[mid + i], right[i]);
    }

    // Print all extracted
    printf("--All left side: ");
    for (int i = 0; i < arrayLength(left); i++) {
        printf("%d, ", left[i]);
    }

    printf("\n--All right side: ");
    for (int i = 0; i < arrayLength(right); i++) {
        printf("%d, ", right[i]);
    }
    printf("\n");

    int leftSize = arrayLength(left);
    int rightSize = arrayLength(right);
    printf("left-size: %d items\n", leftSize);
    printf("right-size: %d items\n", rightSize);

    // Combine and sort the left and right arrays
    int *m = merge(mergesort(left, leftSize), mergesort(right, rightSize), leftSize, rightSize);
    for (int i = 0; i < (leftSize + rightSize); i += 1) {
        printf("%d, ", m[i]);
    }
    printf("\n");

    return m;
    // return merge(mergesort(left, leftSize), mergesort(right, rightSize), leftSize, rightSize);
}

int* merge(int left[], int right[], int sizeLeft, int sizeRight) {
    int indexLeft = 0;
    int indexRight = 0;
    int count = 0;

    int mSize = sizeLeft + sizeRight;
    printf("|----- MERGING LEFT AND RIGHT! -----|\n");
    printf("combined size: %d\n", mSize);

    // Define a static-sized Integer array
    static int* mergedSortedList;
    mergedSortedList = (int*)malloc(mSize * sizeof(int));

    // Go thru all left & right array elements while sorting
    while (indexLeft < sizeLeft && indexRight < sizeRight) {
        if (left[indexLeft] < right[indexRight]) {
            mergedSortedList[count] = left[indexLeft];
            printf("::comparing left %d, right %d\n", left[indexLeft], right[indexRight]);
            printf("::pushing '%d' to left, val: %d\n", left[indexLeft], mergedSortedList[count]);
            indexLeft++;
        } else {
            mergedSortedList[count] = right[indexRight];
            printf("::pushing '%d' to right, val: %d\n", right[indexRight], mergedSortedList[count]);
            indexRight++;
        }

        count++;
    }

    printf(">>count stopped at %d, iLeft %d, iRight %d\n", count, indexLeft, indexRight);

    // Append the items left out from the previous step
    // to the left array
    for (int i = indexLeft; i < sizeLeft; i++) {
        mergedSortedList[count] = left[i];
        printf("--inserting left %d\n", left[i]);
        count++;
    }

    // Append the items left out from the previous step
    // to the right array
    for (int i = indexRight; i < sizeRight; i++) {
        mergedSortedList[count] = right[i];
        printf("--inserting right %d\n", right[i]);
        count++;
    }w

    printf("All sorted and merged:\n");
    for (int i = 0; i < mSize; i++) {
        printf("--merged: %d\n", mergedSortedList[i]);
    }

    printf("\n\n");
    return mergedSortedList;
}