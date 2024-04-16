import java.util.Scanner;
public class CWH_06_Practice {
    public static void main(String[] args) {

         Scanner sc=new Scanner(System.in);
        System.out.println("Enter the marks in 1st subject");
         int subect1=sc.nextInt();
        System.out.println("Enter the marks in 2nd subject");
        int subect2=sc.nextInt();
        System.out.println("Enter the marks in 3rd subject");
        int subect3=sc.nextInt();
        System.out.println("Enter the marks in 4th subject");
        int subect4=sc.nextInt();
        System.out.println("Enter the marks in 5th subject");
        int subect5=sc.nextInt();

        double TotalFiveSubMakrs=subect1+subect2+subect3+subect4+ subect5;
        System.out.println(TotalFiveSubMakrs);
        double Total=500;
        double per= (TotalFiveSubMakrs/Total)*100;
        System.out.println("The percentage is : " + per);
    }
}
