import java.util.Scanner;

/*We have 3 types of errors in java
1)Syntax Errors
2)Logical Errors
3)RunTime Errors (Mostly will be seeing these in production environments
*/
public class CWH_78_Types_Of_Errors_In_java {
    public static void main(String[] args) {


        //79 Is about programs on errors

       // int a =0 It is a syntax error as semicolon was not added
        //b=0 This is also a syntax error as datatype is not defined here

        //Logical Errors
 // Prime numbers: prime is one which can be divided by one and itself . but in this case 9 is divided by 3 as well, so it is a logical error
//        for(int i=1; i<5; i++){
//            System.out.println(i*2+1);
//        }
        
        //runTime Error
        //Logic is correct ,but it will show an arithmetic exception
        Scanner sc= new Scanner(System.in);
        int k = sc.nextInt();

        System.out.println("The kth part of 1000 is " + 1000/k); 

    }
}
