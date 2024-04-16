public class CWH_31_Methods {

    static  int logic(int x, int y){
        int z;
        if (x>y)
        {
            z=x+y;
        }
        else {
            z=(x*y)*5;
        }
         x=566;
        return z;
    }

     public int logic1(int x, int y, int z)
      {
          int d1;
          if (x>y)
          {
              d1=x+y;
          } else if (y>z) {
              d1=x*y;
          }else {
              d1=x/y;
          }
          return d1;
      }



    public static void main(String[] args) {

        int a=5;
        int b=7;
        int c;
        int c1;
        int a1=5;
        int b1=7;
        //calling static method without object creation
       c=logic(5,7);
        System.out.println(c);
        CWH_31_Methods obj= new CWH_31_Methods();
        //Calling the Method by object creation
      int ss=  obj.logic1(a, b, a1);
        System.out.println(ss);


    }

}
