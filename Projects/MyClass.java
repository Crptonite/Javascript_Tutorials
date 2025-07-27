package app.components;

public class MyClass {
    public static void main(String[] args) {
        int[][] myArray = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9},
            {10, 11, 12, 13, 14}
        };

        int myData = myArray[2][1];  // myData now holds 8

        System.out.println(myData);  // Output: 8
    }
}