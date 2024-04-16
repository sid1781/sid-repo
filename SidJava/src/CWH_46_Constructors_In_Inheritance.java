
class base1{
      base1()
      {
          System.out.println("Constructor of a base1 class with no parameters");
      }
      base1(int x){
          System.out.println("Constructor of base1 class with a value of x as " + x);
      }
}
class derived1 extends base1{
    derived1()
    {
        System.out.println("Constructor of a derived1 class with no parameters");
    }
    derived1(int x, int y)
    {
        super(x);
        System.out.println("Constructor of base1 class with a value of x as " + y);
    }
}
class childOfDerived1 extends derived1{
     childOfDerived1()
     {
         System.out.println("Constructor of a childOfDerived class with no parameters");
     }
    childOfDerived1(int x,int y , int z)
    {
        super(x,y);
        System.out.println("Constructor of base1 class with a value of z as " + z);

    }
}
public class CWH_46_Constructors_In_Inheritance {
    public static void main(String[] args) {

        childOfDerived1 cd= new childOfDerived1(5,6,7);


    }
}
