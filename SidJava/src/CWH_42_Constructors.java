  class MainEmployee{

    //Method overloading is possible with the constructors as well.
      //Constructor is a special kind of  method which is used to initialize the object properties.
      //It does not have a return type
      //It has the name same as the class name.
    String name;
    int id;
     public MainEmployee(String n, int i)
     {
         this.name=n;
         this.id=i;

     }
      public MainEmployee(String n)
      {
          this.name=n;
      }

     public String  getName()
     {
         return name;
     }
     public int getId()
     {
         return id;
     }

  }
public class CWH_42_Constructors {

    public static void main(String[] args) {
        MainEmployee  sid = new MainEmployee("Siddeshwar",33);
        MainEmployee  sid1 = new MainEmployee("Rags");
        System.out.println(sid.getName());
        System.out.println(sid.getId());
        System.out.println(sid1.getName());
    }
}
