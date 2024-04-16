public class CWH_35_Methods {

    //Q1: multiplication of a number
//     public static void muliplication(int n)
//     {
//         int c=1;
//         for (int i=1; i<=10; i++)
//         {
//             System.out.format("%d X %d =%d\n",i,n,n*i);
//         }
//     }
     //Q2:Write a program to print the following pattern
//     public  static void PrintPattern()
//     {
//         for (int i=0; i<=4; i++)
//         {
//             for (int j=0; j<i; j++)
//             {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }
//
//     }
     //Q3:Write a recursive function to calculate the sum of first n natural numbers

//        public static int sumNaturalNum(int n)
//        {
//           if(n==1)
//           {
//               return 1;
//           }
//           else {
//               return n+sumNaturalNum(n-1);
//           }
//        }


      //Q4: Write a function to print the foolowing patter

//     public static void pattern2(int n)
//     {
//         for (int i=n ; i>0; i--)
//         {
//             for (int j=0; j<i; j++)
//             {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }
//     }
     //Q:5 write a program to print nth term of fibonacci series using recursion

//       public static int fibSeries(int n)
//       {
//           if(n==1 || n==2)
//           {
//               return n-1;
//           }
//           else
//           {
//               return fibSeries(n-1) + fibSeries(n-2);
//           }
//       }
    //Q6:Write a function to find the average of a set of numbers passed as  arguments:

//    public static float avg(int ...arr)
//    {
//        float sum=0;
//        int l=arr.length;
//        float avg=0;
//        for (int e :arr)
//        {
//             sum =(sum+e);
//             avg=sum/l;
//        }
//        return avg;
//
//    }

    //Q7: print the pattern using recursion method
    //*
    //**
    //***
    //****

    public static void RecursiveMethod(int n)
    {
        if(n>0)
        {
            RecursiveMethod(n-1);
            for (int i=0;i<n; i++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
    }

  //Q8: print the pattern using recursion method
//    //*
//    //**
//    //***
//    //

    public static void main(String[] args) {

//         muliplication(5);
//         PrintPattern();
//        System.out.println(sumNaturalNum(5));
//        pattern2(5);
//        System.out.println(fibSeries(5));
//        System.out.println(avg(3,3 ));
        RecursiveMethod(5);
    }
}
