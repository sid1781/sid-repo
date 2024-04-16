public class CWH_80_Try_Catch_Block {
    public static void main(String[] args) {

         int a =100;
         int b=2;

         try {
             int c =a/b;
             System.out.println(c);
         } catch (Exception e) {
             System.out.println("We cant divide the number with");
             System.out.println(e);
         }
    }
}
