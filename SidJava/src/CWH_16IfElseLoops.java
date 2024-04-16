import java.util.Scanner;
public class CWH_16IfElseLoops {
    public static void main(String[] args) {
        //If else

        int age;
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the age");
        age=sc.nextInt();
        if (age>10)
        {
            System.out.println("Greater Than 10");
        } else if (age==20) {
            System.out.println("Greater Than 20");
        } else if (age<10) {
            System.out.println("Less than 15");
        }
        else {
            System.out.println("No age entered");
        }

    }
}
