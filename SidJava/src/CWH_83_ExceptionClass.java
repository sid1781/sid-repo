/*
Exception class in java helps to create us our own exceptions. by extending the class Exception
 */

/*
we can add the condition in conditional loops and once the condition is true then we can throw the exception as shown below
-- In the below example we have created our own exception to print the error messages. likely we can add the conditions and we can throw our own exceptions
 */
import java.util.Scanner;

class MyException extends Exception{
    @Override
    public String toString() {
//        return super.toString() + "This is my own Exception"; //With Super class message
        return "age is not greater than as expected";
    }

    @Override
    public String getMessage() {
//        return super.getMessage()+ "This is just a message";//With Super class message
        return "Age cant Exceed 125 years";
    }
}
public class CWH_83_ExceptionClass {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {
            System.out.println("Enter the age");
            int age =sc.nextInt();
            if (age>125) {
//                throw  new MyException();//It is not mandatory pass only created exception here we can pass any
                // exceptions . this block of code will execute once the condition becomes true. if the condition becomes false the program continues to execute and gives the output
//                throw new ArithmeticException();
               throw new ArithmeticException("This is a exception");
            }
            else {
                System.out.println("Entered age is less cant proceed with exe");
            }
        }catch (Exception e)
        {
            System.out.println(e);
            System.out.println(e.getMessage());
            e.printStackTrace();
        }

    }
}
