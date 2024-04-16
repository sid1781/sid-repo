import java.util.Objects;
import  java.util.Scanner;
public class CWH_29_ArrayProblems {
    public static void main(String[] args) {
//        Q3:Calculate the average marks from an array containing marks of all students in physics using for each loop

//        float sum=0;
//
//        int [] arratNum={10,20,30,40,50};
//        for (int i = 0; i <=4 ; i++) {
//            sum=sum+arratNum[i];
//        }
//        System.out.println(sum);
//        float avg= sum/arratNum.length;
//        System.out.println(avg);

        //Q4:create a program to add two matrices of sizes 2*3.

//          int[][] matrix= new int[2][3];
//          Scanner sc =new Scanner(System.in);
//          System.out.println("Enter the number of elememts");
//            matrix[0][0]=sc.nextInt();;
//            matrix[0][1]=sc.nextInt();;
//            matrix[0][2]=sc.nextInt();;
//            matrix[1][0]=sc.nextInt();;
//            matrix[1][1]=sc.nextInt();;
//            matrix[1][2]=sc.nextInt();;
//
//            for (int i=0; i<matrix.length;i++)
//            {
//                for (int j=0; j<matrix[i].length;j++ )
//                {
//                    System.out.print(matrix[i][j]);
//                    System.out.print(" ");
//                }
//                System.out.println();
//            }

        //Q5: write a java program to reverse an array

//        int[] arr={15,56,56,5,57,68,66,665,665,454,556};
//        int l =arr.length;
//        float a =Math.floorDiv(l,2);
//        int temp;
//        for (int i=0; i<a;i++)
//        {
//            //swap a[i] and a[l-1-i]
//             temp =arr[i];
//             arr[i]=arr[l-i-1];
//             arr[l-i-1]=temp;
//        }
//        for (int elementsInArr : arr)
//        {
//            System.out.println(elementsInArr + "");
//        }
//        //Q6: Write a java program to find the maximum element in an array

//               int[] arr={22,44,555,55,56,666,777};
//               int max=0;
//               for (int i=0; i<arr.length;i++)
//               {
//                   if (arr[i]>max)
//                   {
//                       max=arr[i];
//                   }
//               }
//        System.out.println(max);

         //Q7:Write java program to find the minimum element in an array

//        int[] arr={33,21,55,66,77,55,44,3,66,889};
//          int min=arr[0];
//           for (int i=0; i<arr.length;i++)
//           {
//               if (arr[i]<min)
//               {
//                   min=arr[i];
//               }
//           }
//        System.out.println(min);
//        Scanner sc= new Scanner(System.in);
//        int minSharePrice=0;
//        int[] sharePrice = new int[7];
//        System.out.println("Enter the share Price for beginning Day");
//        sharePrice[0]=sc.nextInt();
//        System.out.println("The beginning share price is:" + sharePrice[0]);
//
//         for (int i=0; i<sharePrice.length;i++)
//         {
//             if (sharePrice[i]>minSharePrice)
//             {
//                 minSharePrice=sharePrice[i];
//             }
//         }
//        System.out.println("its a begining Day Dont sell the shares");
//        System.out.println("enter Second days share price");
//         sharePrice[1]=sc.nextInt();
//        for (int i=0; i<sharePrice.length;i++)
//        {
//            if (sharePrice[i]>minSharePrice)
//            {
//                minSharePrice=sharePrice[i];
//            }
//        }
//        if (minSharePrice==sharePrice[0] )
//        {
//            System.out.println("The Day1 and Day2 prices are same");
//        } else if (minSharePrice>sharePrice[0]) {
//            System.out.println("The Day 2 price is more than day1");
//        }
//        else {
//            System.out.println("The Day2 price is less than day1 ");
//        }
//        System.out.println("Do you want to continue to sell the shares ?");
//        String r =sc.next();
//        if (r.equals("YES"))
//        {
//            System.out.println("Selling the shares at a price of "+minSharePrice);
//        } else
//        {
//            System.out.println("Waiting for next day to open");
//        }
//
//        System.out.println("Enter the Third day share price");
//        sharePrice[2]=sc.nextInt();
//
//        for (int i=0; i<sharePrice.length;i++)
//        {
//            if (sharePrice[i]>minSharePrice)
//            {
//                minSharePrice=sharePrice[i];
//            }
//        }
//        if (minSharePrice==sharePrice[0] && minSharePrice ==sharePrice[1])
//        {
//            System.out.println("Day 1 Day2 and Day3 sell prices are same");
//            System.out.println("Do you want to continue to sell the shares ?");
//            String r1=sc.next();
//            if (r1.equals("YES"))
//            {
//                System.out.println("Selling the shares at a price of "+ minSharePrice);
//            } else if (minSharePrice>sharePrice[0] && minSharePrice>sharePrice[1]) {
//                System.out.println(" Day3 sell price is more"+ minSharePrice);
//                System.out.println("Do you want to continue to sell the shares ?");
//                String r2=sc.next();
//                if (r2.equals("YES"))
//                {
//                    System.out.println("Selling the shares at a price of "+ minSharePrice);
//                }
//            } else
//            {
//                System.out.println("Waiting for next day to open");
//            }
//        }
        //Q:8 write a program to find the whether a array is sorted array or not
//
//        int[] arr={1,5,4,7};
//        boolean IsSorted=true;
//
//        for (int i=0; i<arr.length-1; i++)
//        {
//               if(arr[i] > arr[i+1])
//               {
//                  IsSorted= false;
//                  break;
//               }
//        }
//        if (IsSorted)
//        {
//            System.out.println("Array is sorted");
//        }
//        else {
//            System.out.println("Array is not sorted");
//        }
        //Q9:print the given array in incremental order



        int[] arr={3,1,2};

        for (int i=0; i<2; i++)
        {
            for (int j=0; j<2; j++)
            {
                if (arr[j]>arr[j+1])
                {
                        int temp=arr[j];
                         arr[j]=arr[j+1];
                         arr[j+1]=temp;
                }
            }

        }
        for (int i=0; i< arr.length; i++)
        {
            System.out.println(arr[i]);
        }



    }
}
