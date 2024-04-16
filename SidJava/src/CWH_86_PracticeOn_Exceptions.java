import java.util.Scanner;


class MaxRetriesException extends Exception{
    @Override
    public String toString() {
        return "Index is not present in the given array";
    }

}
public class CWH_86_PracticeOn_Exceptions {
    public static void customException() throws MaxRetriesException{
        int[] arr={12,13,14,15,15};
        int index=0;
        Scanner sc = new Scanner(System.in);
        boolean flag=true;
        int i=0;
        while (flag && i<5){ //We can add two conditions in while loop
            try{
                System.out.println("Enter the Index Number");
                index = sc.nextInt();
                throw new MaxRetriesException();
            }catch (MaxRetriesException e){
//                System.out.println("The value at given index is " + arr[index]);
                System.out.println(e.toString());
                i++;
            }
        }
        if (i<=5){
            System.out.println("Error");
        }
    }

    public static void main(String[] args) throws MaxRetriesException {
        customException();
    }
}
