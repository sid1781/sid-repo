 class SetB {
    public static int fibSeries(int n) {
        if (n == 1 || n == 2) {
            return n - 1;
        } else {
            return fibSeries(n - 1) + fibSeries(n - 2);
        }
    }


    public class Practice {
        public static void main(String[] args) {

            //Reverse a array

            String s = "siddeshwar";

            char[] charArray = s.toCharArray();

            for (int i = 0, j = charArray.length - 1; i < j; i++, j--) {
                char temp = charArray[i];
                charArray[i] = charArray[j];
                charArray[j] = temp;
            }
            String reversed = new String(charArray);
            System.out.println("reversed array " + reversed);

            SetB n= new SetB();

        }


    }
}
