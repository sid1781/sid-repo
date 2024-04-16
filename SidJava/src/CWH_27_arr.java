public class CWH_27_arr {
    public static void main(String[] args) {
//        ForeEach loop in java:We will use this loop when we are less bothered about the  number./loop number
                String[] names={"Sid","Nag's","Datta","Prashant","Rags"};
//        System.out.println(names[0]);
        int[] numbers={10,20,30,40,50};
        //Print the above numbers in incrementing order

       /* for (int i=0; i<numbers.length;i++)
        {
            System.out.println(numbers[i]);
        }
        */
        //Write a program to print the given numbers in reverse order:

        for (int i=numbers.length-1; i>=0; i--)
        {
            System.out.println(numbers[i]);
        }

        System.out.println("Printing using enhanced for Loop");

        for(int elements:numbers)
        {
            System.out.println(elements);
        }
    }
}
