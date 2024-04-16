public class CWH_34_JavaRecursion {

     //Factorial of a number using recursion

    public  static int factorial(int n)
    {
         if(n==0 || n==1)
         {
             return 1;
         }
         else {
             return n * factorial(n-1);
         }
    }
    //Using forloop;
     public static int factorial_usingFor(int n)
     {
         int fact=1;
         for (int i=n; i>0; i--)
         {
             fact *=i;
         }
         return fact;
     }


    public static void main(String[] args) {
        //Recursion: A Function is recalled itself is called as recursion in java.

        System.out.println(factorial(5));
        System.out.println(factorial_usingFor(5));



    }
}
