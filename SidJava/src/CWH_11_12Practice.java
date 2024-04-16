import java.util.Scanner;
public class CWH_11_12Practice {
    public static void main(String[] args) {
   //Q1)Resolve the Expression
    float a= 7/4.0f * 9/2.0f;
        System.out.println(a);
     //Q2 ) Write a program to add 8 grades and subtract 8 grades
        char ch='B';
        char grade=(char)(ch+8);
        System.out.println(grade);
        char degrade=(char)(grade-8);
        System.out.println(degrade);
        //Q3)Use a comparison operator to decide the value whether its greater number or not

        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the number to validate");
        int num=sc.nextInt();
        System.out.println(num>8);
        //Q4 Write the following expression java
        int v=1;
        int u=12;
        int s=10;
        int exp=(int)((v*v)-(u*u)/2*a*a);


    }
}
