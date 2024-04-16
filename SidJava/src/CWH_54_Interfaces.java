//Interface: an interface is a reference type, similar to a class,
// that can contain only constants, method signatures, default methods, static methods.
// Method bodies exist only for default methods and static methods. Interfaces cannot be instantiated—they can only be implemented by classes or extended by other interfaces

interface Drawing1{
    public void Draw();
    abstract public void Erase();
}

abstract  class Circle1 implements   Drawing1 {
      public void Draw()
      {
          System.out.println("Draw Circle");
      }
      public void Erase()
      {
          System.out.println("Erase Circle");
      }
      abstract public void Delete();
}

class Rectangle1 implements Drawing1{
    @Override
    public void Draw()
    {
        System.out.println("Draws Rectangle");
    }
    public void Erase()
    {
        System.out.println("Erase Rectangle");
    }
}

class Cube extends Rectangle1{

      @Override
      public void Draw()
      {
          super.Draw();
          System.out.println("Draw Cube");
      }
}
public class CWH_54_Interfaces {
    public static void main(String[] args) {

        Cube d= new Cube();
        d.Draw();
        d.Erase();

    }
}
