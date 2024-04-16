//Create a class of employess with following properties
//salary(property)
//getSalary(methodReturning int)
//name(Property)(String)
//getName(method returning string)
//setName(method changing name)

class Employees{
     int salary;
     String name;
     int getSalary(int salary)
     {
         return salary;
     }
     String getName(String name)
     {
         return name;
     }
     String setName(String name)
     {
         return name;
     }

}

class CellPhone{

    public void ring()
    {
        System.out.println("The phone is ringing");
    }
    public void vibrate()
    {
        System.out.println("The phone is vibrating");
    }
    public void call()
    {
        System.out.println("The phone is calling");
    }
}

class Square{
      float r;
      float p;
      public float radiusOfASquare(int a)
      {
          return r=a*a;
      }
      public  float perimeterOfASquare(int a)
      {
          return  p=4*a;
      }
}

public class CWH_39_OopsPractice {


    public static void main(String[] args) {
//
        //Problem-1
//        Employees emp= new Employees();
//        System.out.println(emp.setName("Sid"));
//        int salary1=emp.salary=500;
//        System.out.println(emp.getSalary(salary1));
//        System.out.println(emp.getName(emp.setName("sid")));
//
//        Problem-2
//        CellPhone cp=new CellPhone();
//        cp.call();
//        cp.ring();
//        cp.vibrate();

        //Problem-3
        Square sc= new Square();
        System.out.println("The Radius of a square is "+sc.radiusOfASquare(5));
        System.out.println("The perimeter of a sqaure is " +sc.perimeterOfASquare(5));

    }
}
