import  java.util.Scanner;
public class CWH_29_ArrayPractice {
    public static void main(String[] args) {
        //Q:Create an array of 5 elements and calculate their some

//        int sum =0;
//        int[] marks={10,20,30,40};
//
//          for (int i=0; i<marks.length;i++)
//          {
//               sum = sum+marks[i];
//          }
//        System.out.println(sum);
        //Q2:write a program to find out whether a given integer is present or not in the given array

        Scanner sc=new Scanner(System.in);
/*
        System.out.println("enter the number you want to search");
        int givennum=sc.nextInt();
           int[] givenArray={2,4,6,8,10};
        int givennum=7;
        boolean isInArray=false;

        for (int element : givenArray){
            if (element==givennum)
            {
                isInArray =   true;
                break;
            }
        }            if(isInArray)
            {
                System.out.println("The number is present");
            }
            else
            {
                System.out.println("The number is not present");
            }
Q3:Calculate the average marks from an array containing marks of all students in physics using for each loop
                                          */


         float sum=0;

  int [] arratNum={10,20,30,40,50};
        for (int i = 0; i <=4 ; i++) {
            sum=sum+arratNum[i];
        }
        System.out.println(sum);
        float avg= sum/arratNum.length;
        System.out.println(avg);

























































}
}