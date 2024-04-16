import java.util.Scanner;
public class CWH_19PracticeSet {
    public static void main(String[] args) {
         int Tmarks;
         int s1;
         int s2;
         int s3;
         Scanner sc=new Scanner(System.in);
        System.out.println("Enter s1 Marks");
        s1=sc.nextInt();
        System.out.println("Enter s2 Marks");
        s2=sc.nextInt();
        System.out.println("Enter s3 Marks");
        s3 =sc.nextInt();

        Tmarks=s1+s2+s3;
        System.out.println("entered Total Marks are : "+ Tmarks);
        float result;
        result=Tmarks/300.0f *100;
        System.out.println(result);
        float s1percentage=s1/100.0f *100;
        System.out.println(s1percentage);
        float s2percentage=s2/100.0f * 100;
        float s3percentage=s3/100.0f *100;

        if (s1percentage>=33.0f && s2percentage>=33.0f && s3percentage>=33.0f && result>=40.0f)
        {
            System.out.println("he has passed the exam");
        }
        else
        {
            System.out.println("he has failed in exam");
        }

    //    Q2
         int incomeInRs;
//         Scanner sc= new Scanner(System.in);
        System.out.println("Enter the income of Employee");
           incomeInRs=sc.nextInt();
        System.out.println("Income Entered is : " + incomeInRs);

        if (incomeInRs>=250000 && incomeInRs<=500000) {
            float Tax=incomeInRs*5/100.0f;
            System.out.println("Total Tax to be paid is : "+ Tax);
        } else if (incomeInRs>500000 && incomeInRs<=1000000) {
            float Tax=incomeInRs*20/100.0f;
            System.out.println("Total Tax to be paid : "+Tax);
        } else if (incomeInRs>1000000) {

            float Tax=incomeInRs*30/100.0f;
            System.out.println("Total Tax to be paid : "+ Tax);
        }
        else
        {
            System.out.println("No need to pay the Tax. please increase you profit");
        }


          int number;
//          Scanner sc=new Scanner(System.in);
        System.out.println("Enter the Day number");
        number = sc.nextInt();
        switch (number)
        {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                    System.out.println("Tuesday");
                    break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            default:
                System.out.println("Sunday");
        }
//        Q:leap year
           int year;
//           Scanner sc=new Scanner(System.in);
        System.out.println("Enter the Year");
        year=sc.nextInt();
        if (year%4==0 && year%100 !=0 || year%400==0)
        {
            System.out.println("Enter year is LEAP YEAR \nThe year is "+year);
        }
        else
        {
            System.out.println("Year is not a LEAP YEAR \n The year is "+year);
        }
        //Q6

    }
}
