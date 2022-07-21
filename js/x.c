#include <stdio.h>
int main(int argc, char const *argv[])
{
    int arr[5] = {1, 2, 3, 4, 5};

    int arr1[5];
    int sum = arr[0];
    arr1[0] = arr[0];

    for (int i = 1; i < 5; i++)
    {
        sum = sum + arr[i];
        arr1[i] = sum;
    }

    for (int i = 0; i < 5; i++)
    {
        printf("%d ", arr1[i]);
    }

    return 0;
}
