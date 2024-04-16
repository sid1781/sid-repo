import java.util.Scanner;

/*

In Java, an exception is an event that occurs during the execution of a program and disrupts the normal flow of instructions.
When an exceptional condition arises, the program creates an object representing that exception and throws it.
 The code that might throw an exception is enclosed in a try block, and the code that handles the exception is written in a catch block.
 Checked Exceptions:

Checked exceptions are those that must be either caught or declared in the method using the throws keyword.
Examples include IOException, SQLException, etc.


Unchecked Exceptions (Runtime Exceptions):
Unchecked exceptions are subclasses of RuntimeException. They usually indicate programming errors or problems that can be prevented by proper coding.
Examples include NullPointerException, ArrayIndexOutOfBoundsException


NullPointerException:

Thrown when you attempt to access or invoke a method on an object reference that is null.
java
Copy code
String str = null;
int length = str.length(); // Throws NullPointerException
ArrayIndexOutOfBoundsException:

Occurs when you try to access an array element with an index that is outside the bounds of the array.
java
Copy code
int[] array = {1, 2, 3};
int value = array[5]; // Throws ArrayIndexOutOfBoundsException
ArithmeticException:

Thrown when an arithmetic operation results in an overflow, underflow, or division by zero.
java
Copy code
int result = 5 / 0; // Throws ArithmeticException
ClassCastException:

Thrown when you attempt to cast an object to a type that it is not an instance of.
java
Copy code
Object obj = "Hello";
Integer intValue = (Integer) obj; // Throws ClassCastException
NumberFormatException:

Occurs when you attempt to convert a string to a numeric type, but the string is not a valid number.
java
Copy code
String str = "abc";
int value = Integer.parseInt(str); // Throws NumberFormatException
IllegalArgumentException:

Thrown when an illegal argument is passed to a method.
java
Copy code
public void doSomething(int value) {
    if (value < 0) {
        throw new IllegalArgumentException("Value must be non-negative");
    }
    // rest of the method
}
IllegalStateException:

Thrown when the state of an object is not as expected for a particular operation.
java
Copy code
List<String> list = Collections.unmodifiableList(new ArrayList<>());
list.add("Item"); // Throws IllegalStateException
 */
public class CWH_81_Specific_Exceptions {
    public static void main(String[] args) {

        int[] arr={1,2,3,4,5,6};
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the index for which element you want apply division");
         int a =sc.nextInt();
        System.out.println("Enter the number from which you want to make division");
        int b = sc.nextInt();
        try {
            System.out.println("The divided number id " +arr[a]/b);
        }catch (ArithmeticException e){
            System.out.println("Arithmetic exception thrown");
            System.out.println(e);
        } catch (ArrayIndexOutOfBoundsException e)
        {
            System.out.println("ArrayIndexOutOfBoundsException Exception");
            System.out.println(e);
        }
    }
}
