public class CWH_33_VarArgus {
//       public  static int sum()
//       {
//           return 0;
//       }
//       public  static int sum(int a)
//       {
//           return a;
//       }
//       public static int sum(int a , int b)
//       {
//           return a+b;
//       }
//       public static int sum(int a, int b, int c)
//       {
//        return a+b+c;
//       }

        public  static int sum(int ...arr)
        {
             int sum=0;
             for (int a : arr)
             {
                 sum +=a;

             }
            return sum;

        }

    public static void main(String[] args) {
        //By using varArgus we can take any number of arguments to the method.

        System.out.println("The value of a is Nothing" + sum());
        System.out.println("The value of a is " + sum(5));
        System.out.println("The value of a + b is " + sum(5,5));
        System.out.println("The value of a + b + c is " + sum(5,5,5));

    }
}
