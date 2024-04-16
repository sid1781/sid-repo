import java.util.Scanner;
public class CWH_18_SwitchCase {
    public static void main(String[] args) {
        int age;
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the age");
        age =sc.nextInt();
        switch (age)
        {
            case 18:
                System.out.println("eligible for voting");
                break;
            case 22:
                System.out.println("Eligible for voting");
                break;
            case 60:
                System.out.println("Eligible for voting twice");
                break;
            case 90:
                System.out.println("Eligible for Double Pension");
                break;
            default:
                System.out.println("No age entered");
        }

    }
}
