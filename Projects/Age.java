package app.components;

public class Age {
    int age = 20;
    boolean hasPermission = false;

    public static void main(String[] args) {
        int age = 20;
        boolean hasPermission = false;

        if (age >= 18 || hasPermission) {
            System.out.println("You can enter.");
        } else {
            System.out.println("Access denied.");
        }
    }
}
