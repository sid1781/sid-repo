public class CWH_24_BreakAndContinue {
    public static void main(String[] args) {
         //Break:This breaks the loops for the specified condition and comes out of the loop by ski
        //skipping the remaining iterations.

//        int i=0;
//        for (i=0;i<9;i++)
//        {
//            System.out.println(i);
//            if(i==2)
//            {
//                System.out.println("break here and stop executing");
//                break;
//            }
//        }
//        while(i<5)
//        {
//            System.out.println(i);
//            if(i==2)
//            {
//                System.out.println("Break the while loop here");
//                break;
//            }
//            i++;
//        }
//        do {
//            System.out.println("Running Do while");
//            System.out.println(i);
//            if(i==2)
//            {
//                System.out.println("End the loop here");
//                break;
//            }
//            i++;
//        }while (i<5);


        //Continue:This continues to iterate the loop by skipping the specified  conditions

//        for (i=0;i<5;i++)
//        {
//            if (i==2)
//            {
//                System.out.println(i);
//                System.out.println("Iam skipped for 2");
//                continue;
//            }
////            System.out.println(i);
//            System.out.println("These lines are skipped for 2");
//        }

        //While continue

//        while(i<5)
//        {
//            i++;
//            if(i==2)
//            {
//                System.out.println("skipp here for 2");
//                continue;
//            }
//            System.out.println("Continue");
//
//        }

        //Do while
        int i=0;
        do {
            System.out.println(i);
            i++;
            if (i==2)
            {
                continue;
            }
            System.out.println("iam skkiped for two");
        }while (i<5);


    }
}
