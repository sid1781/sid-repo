

import java.util.Scanner;

public class CWH_06_PracticeSet {
    public static void main(String[] args) {


//        float a=45;
//        float b=45;
//        float c=45;
//        float t= 300;
//        float totalMarks=a+b+c;
//        float cgpa=a+totalMarks/t;
//        System.out.println(cgpa);

        //Question:Write a program to convert kilometer to miles

        Scanner sc= new Scanner(System.in);
//
//        System.out.println("Enter the Kilometers to convert to miles");
//        double km=sc.nextDouble();
//        double miles= km * .621371;
//        System.out.println("The entered kilometes in miles is : "+ miles);

        //Question:Write a java program to detect whether a number entered is integer not

        System.out.println("Enter the number to validate the dataType");
//        int num=sc.nextInt();
         boolean b1=sc.hasNextInt();
        System.out.println(b1);
    }
}
