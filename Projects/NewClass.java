package app.components;

public class NewClass {
    public static void main(String[] args) {
        int[] numbers = new int[5];  // Default values: {0, 0, 0, 0, 0}

        // Set the first element (index 0) to 10
        numbers[0] = 10;  // Now array is: {10, 0, 0, 0, 0}

        // Access the first element and store it in a variable
        int firstElement = numbers[0];  // firstElement now holds 10

        // Print the first element
        System.out.println(firstElement);  // Output: 10
    }
}
