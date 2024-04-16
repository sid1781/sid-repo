import java.util.HashSet;
import java.util.Set;

public class CWH_20_WhileLoop {
    public static void main(String[] args) {
//        int i=1;
//        while (i<=5)
//        {
//            System.out.println(i);
//            i++;
//        }
//        //Q:Print natural numbers
//
//        int j=100;
//        while (j<=200)
//        {
//            System.out.println(j);
//            j++;
//        }

        //Do while loop
//        int a=0;
//         do {
//             System.out.println(a);
//             a++;
//         }while (a<10);

         //for loop

//         for (int i=1;i<10;i++)
//         {
//             System.out.println(i);
//         }

         //Q;print the even natural numbers
//        int n=0;
       String name="Siddeshwarrr";
        Set<Character> seenChar=new HashSet<>();
         for (int i=0;i<12;i++)
         {
             if (i %2!=0 && seenChar.add(name.charAt(i)))
             {
                 System.out.print(name.charAt(i));
             }
         }
    }
}
