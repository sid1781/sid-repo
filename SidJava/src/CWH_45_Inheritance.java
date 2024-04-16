class Base{
      int a;
      public void setA(int ab)
      {
          this.a=ab;
      }
      public int getA()
      {
          return a;
      }
}
class Derived extends Base {
    int b;
    public void setB(int bc){
        this.b=bc;
    }
    public int getB()
    {
        return b;
    }
}
public class CWH_45_Inheritance {
    public static void main(String[] args) {

        Derived d=new Derived();
        d.setA(5);
        System.out.println(d.getA());
        d.setB(56);
        System.out.println(d.getB());

    }
}
