public class CWH_32_Method_Overloading {
//      static void  change(int z){
//          z=1;
//      }
//      static  void   change2(int [] arr)
//      {
//          arr[0]=98;
//      }

    //Method overloading:

     public static  void logic()
     {
         System.out.println("My name is Khan");
     }
     public static void logic(int a) //int a is parameter here because value of a changes based on the value we pass
     {
         System.out.println("The value of a is " + a);
     }
     public static void logic(int a , int b)
     {
         System.out.println("The multiplication of two numbers is " + a*b);
     }
    public static void main(String[] args) {

          //Case 1: Change integer
//         int x=45;
//         change(x);
//         System.out.println(x);

        //Case2: Changing the Array
//         int [] marks={25,30,45,44};
//         change2(marks);
//        System.out.println("Changed array number is " + marks[0]);

        //Method overLoading.:Two or more methods can have the same name but different parameter such methods are called as overlaoded methods

      logic();
      logic( 5);
      logic(5,7);  // Arguments are actual!

      //Note:method overloading is only possible by changing the parameters.  but cant be achieved by changing the return types.


    }
}
