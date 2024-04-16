import java.util.Scanner;
public class CWH_05_TakingUserInputs {
    public static void main(String[] args) {

         Scanner sc =new Scanner(System.in);
        System.out.println("Enter number 1");
               int num1=sc.nextInt();
        System.out.println("Enter number 2");
          int num2=sc.nextInt();
           int sum=num1+num2;
        System.out.println("Sum of Entered Two number is : " +sum);

        System.out.println("Enter floating number 1");
        float numf1=sc.nextFloat();
        System.out.println("Enter flaoting number 2");
        float numf2=sc.nextFloat();
        float sumf=numf1+numf2;
        System.out.println("The sum of two floating numbers is : " + sumf);

        System.out.println("Enter a String from user");
        String name=sc.nextLine();
        System.out.println(name);
        System.out.println("Take input from user");
        boolean b1=sc.hasNextInt();
        System.out.println(b1);
    }

}
