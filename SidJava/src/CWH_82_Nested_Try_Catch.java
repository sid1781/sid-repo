import java.util.Scanner;

public class CWH_82_Nested_Try_Catch {
    public static void main(String[] args) {
        int[] arr = {12,13,14,15};

        Scanner sc= new Scanner(System.in);

         boolean con=true;
         while (true) {
             try {
                 System.out.println("Enter the index number to divide from the given array");
                 int ind = sc.nextInt();
                 System.out.println("Enter the number to Divide");
                 int d= sc.nextInt();
                 try {
                     System.out.println("The Result is " + arr[ind] / d);
                     con = false;
                 } catch (ArithmeticException e) {

                     System.out.println("Number cant be divided by zero please enter on more number");
                     System.out.println(e);
                 }
             } catch (ArrayIndexOutOfBoundsException e) {
                 System.out.println("Entered element is out of the specified array index");
                 System.out.println(e);
             }
         }
    }
}
