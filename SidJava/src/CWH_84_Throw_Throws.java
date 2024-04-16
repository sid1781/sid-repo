/*
throw Keyword:

The throw keyword is used to explicitly throw an exception.
This is typically used when a specific error condition is encountered within a method,
and the developer wants to terminate the normal flow and indicate that something exceptional has happened.
Syntax:
throw throwableInstance;
Example:
public int divide(int numerator, int denominator) {
    if (denominator == 0) {
        throw new ArithmeticException("Cannot divide by zero");
    }
    return numerator / denominator;
}
In this example, if the denominator is zero, an ArithmeticException is explicitly thrown with the message "Cannot divide by zero."

throws Clause:

The throws keyword is used in the method signature to declare that a method might throw one or more types of exceptions.
When a method declares that it throws a particular exception, it means that the method might encounter that exception during its execution,
 and the calling code should be prepared to handle it.
Syntax:
returnType methodName(parameters) throws ExceptionType1, ExceptionType2, ... {
    // method body
}
Example:
public void readFile(String fileName) throws IOException {
    // code that might throw IOException
}
In this example, the readFile method is declared to throw an IOException. It is the responsibility of the calling code to handle or propagate this exception.

It's important to note the difference between throw (used for throwing an exception) and throws (used in the method signature to declare potential exceptions). Additionally, checked exceptions (those extending Exception but not RuntimeException) are required to be declared in the method signature using the throws clause or caught using a try-catch block. Unchecked exceptions (extending RuntimeException) are not subject to this rule.
 */

class NegativeNumberException extends Exception{
    @Override
    public String toString() {
        return "Number cant be a negative Integer";
    }
}

public class CWH_84_Throw_Throws {

   public static double divide(int a, int b) throws ArithmeticException{
        return  a/b;
    }

    public static double radius(int r) {
        double result=0;
       try {
           if (r<0){
               throw  new NegativeNumberException();
           }
           else {
                result= Math.PI*r*r;
               System.out.println(result);
           }
       }catch (NegativeNumberException n) {
           System.out.println(n);
       }
       return result;
    }
    public static void main(String[] args) {

       try {
//           double c = divide(5,0);
           double c= radius(-5);
           System.out.println(c);
       }catch (ArithmeticException e)
       {
           System.out.println(e);
           System.out.println("Shows ArithmeticException");
       }


    }
}
