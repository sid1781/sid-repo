/*
  Design a custom calculator with following operations
  1. -->division
  2. -->Multiplication
  3. -->Subtraction
  4. -->Addition

  which throws the floowing exceptions
  1.Invalid input expection ex:8 &i
  2.Cannot Divide by 0 Exception
  3.Max Input Exception if any of the inputs is greater than 10000
  4.Max Multiplier Reached Exception -Dont allow any multiplication input greater than 70000
 */

import java.util.Objects;
import java.util.Scanner;

class Calculator {
    public double division(int a , int b)
    {
        return (double) a /b;
    }
    public int multiplication(int a , int b){
        return a*b;
    }
    public int addition(int a , int b){
        return a+b;
    }
    public int subStraction(int a , int b){
        return a-b;
    }
}
class MyExceptions extends Exception{
    @Override
    public String toString() {
        return "you cant pass more than two number";
    }

    @Override
    public String getMessage() {
        return "Number cant exceed 10";
    }

}
public class CWH_87_PracticeCalculatorOnExceptions {
    public static void main(String[] args) throws MyException {

        Calculator c = new Calculator();
         int b = 0;
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the operation you want to perform");
        String ope= sc.nextLine();
        if(Objects.equals(ope, "Div")){
            System.out.println("Enter to numbers to divide");
            int a=sc.nextInt();

            try {
                if (a>10){
                    throw new MyException();
                }
                 b= sc.nextInt();
                if (b>10){
                    throw new MyException();
                }
            }catch (MyException e){
                System.out.println(e.toString());
            }
            System.out.println("Chosen To div");
            System.out.println("The result is "+ c.division(a,b));
        } else if (Objects.equals(ope, "Mul")) {
            System.out.println("Chosen To mul");
            System.out.println("Enter to numbers to multiply");
            int a=sc.nextInt();
            try {
                if (a>10){
                    throw new MyException();
                }
                b= sc.nextInt();
                if (b>10){
                    throw new MyException();
                }
            }catch (MyException e){
                System.out.println(e.toString());
            }
            System.out.println("The result is "+c.multiplication(a,b));
        } else if (Objects.equals(ope,"Sub")) {
            System.out.println("Chosen To sub");
            System.out.println("Enter to numbers to subtraction");
            int a=sc.nextInt();
//            int b= sc.nextInt();
//            System.out.println("The result is "+ c.subStraction(a,b));
        }else {
            System.out.println("Chosen to add");
            System.out.println("Enter to numbers to subtraction");
            int a=sc.nextInt();
//            int b= sc.nextInt();
//            System.out.println("The result is "+c.addition(a,b));
        }

    }
}
