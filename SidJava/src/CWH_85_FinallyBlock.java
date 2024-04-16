/*
Finally Block will be executed if the method execution throws exception or not. in the sense finally block will  always be executed.
 Examples: When the condition becomes true in a while loop and below lines will execute , the program will be terminated there only when the break keyword was executed
 When we want the server to clean-up after executing something then will make use of finally block.
 Whenever there is exception thrown, and we want to execute the one final statement will use  finally block.

 Usage:

The finally block is commonly used for cleanup operations, such as closing files, releasing resources, or performing any necessary actions regardless of the outcome of the try and catch blocks.
Always Executed:

The code in the finally block is guaranteed to be executed, even if an exception is thrown and caught, or if there is an early return statement in the try or catch block.
No Exception Handling:

The finally block doesn't handle exceptions itself; it is used for cleanup code. If an exception occurs in the finally block, it will propagate up the call stack.
 */


public class CWH_85_FinallyBlock {

    public static boolean cancel() {
        int a = 10;
        int b = 0;
        int c;
        while (true) {
            try {
                System.out.println(a / b);
                break;
            } catch (Exception e) {
                System.out.println(e);
                break;
            }
            finally {
                System.out.println("End of the Final Block");
            }

        }
        return false;
    }
    public static void main (String[]args){

           cancel();
        try
        {
            System.out.println("Iam Try Block");
        }finally{
            System.out.println("Iam Fibally Block");
        }
    }
    //we can use try and finally block together.

}

