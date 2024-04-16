import java.util.*;

public class CWH_25_PracticeSetLoops {
    public static void main(String[] args) {
            //Problem 1 print the * pattern

//          int n=4;
//          for (int i=n; i>0; i--)
//          {
//              for (int j=0;j<i;j++)
//              {
//                  System.out.print("*");
//              }
//              System.out.print("\n");
//          }
//         for(int i=1; i<=5; i++)
//         {
//             for (int j=1; j<=5; j++)
//             {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }
//         for (int i=0; i<=5;i++)
//         {
//             for (int j=0; j<i; j++)
//             {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }

//        for (int i=5; i>0; i--)
//        {
//            for (int j=0; j<i; j++)
//            {
//                System.out.print("*");
//            }
//            System.out.println();
//        }

//        for (int i=0; i<5; i++)
//           {
//            for (int k=0; k<5; k++)
//            {
//                System.out.print("_");
//            }
////            System.out.println();
//            for (int j=0; j<5;j++)
//               {
//                   System.out.print("*");
//               }
//            System.out.println();
//        }
//        System.out.println();

//        for(int i=5; i>0; i--)
//        {
//            for (int j=0; j<i; j++)
//            {
//                System.out.print("*");
//            }
//            System.out.println();
//
//        }

//        for (int i=5; i>0; i--)
//        {
//            for (int k=0; k<i; k++)
//            {
//                System.out.print(" ");
//
//            }
//            for (int j=0; j<5; j++)
//            {
//                System.out.print("*");
//            }
//            System.out.println();
//        }
//            for (int i=0;i<9;i++)
//            {
//                for (int k=0; k<9-i+1; k++)
//                {
//                    System.out.print(" ");
//                }
//                for (int j=0; j<2*i+1;j++)
//                {
//                    System.out.print("*");
//                }
//                System.out.println();
//            }
        //Q:Write a program to sum first n even numbers
       Scanner sc= new Scanner(System.in);
//       int sum=0;
//        System.out.println("Enter the first even numbers to sum");
//        int num=sc.nextInt();//10
//        for (int i=0;i<num; i++)
//        {
//          sum=sum+2*i;
//
//        }
//        System.out.println(sum);
        //Q:Write a program to print the multiplication table of a given number

//          int n=5;
//          for(int i=1;i<=10; i++)
//          {
//              System.out.printf("%d X %d =%d\n",n, i, 5*i);
//          }
        //Q:Write a program to print the multiplication table of a given number in reverse order
//        int n=5;
//        for(int i=10;i>=0; i--)
//        {
//            System.out.printf("%d X %d =%d\n",n, i, 5*i);
//        }
        //Q write a program to find the factorial of a number using for loop
        int f=1;
        int n=5;
         for (int i=1; i<=n;i++)
         {
               f *= i;

         }
        System.out.println(f);

//        String name="Siddeshwar is an automation Team member";

//        Set<Character> scc=new HashSet<>();

//        for (int i=0; i<name.length();i++)
//        {
//            if(i%2 !=0 && scc.add(name.charAt(i)))
//            {
//                System.out.print(name.charAt(i));
//            }
//
//        }
//        String name = "SIDDESHWAR";
//        Map<Character, Integer> charIndices = new HashMap<>();

//        for (int i = 0; i < name.length(); i++) {
//            char currentChar = name.charAt(i);
//
//            if (i % 2 != 0) {
//                // Check if the character is already in the map
//                if (charIndices.containsKey(currentChar)) {
//                    System.out.println("Duplicate character: " + currentChar + ", Index: " + i);
//                } else {
//                    charIndices.put(currentChar, i);
//                }
//            }
//        }

    }
}
