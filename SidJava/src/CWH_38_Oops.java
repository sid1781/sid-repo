class Employee {
    int id;
    String name;
    int salary;
 public void printDetails()
 {
     System.out.println("The name is " + name);
     System.out.println("My id is " + id);

 }
    public int getSalary()
    {
        return salary;
    }

}





public class CWH_38_Oops {

    //Creating a custom class: when we want to create the mulitple classes in a single clas there will be only one public class.

    public static void main(String[] args) {

         Employee harry= new Employee();
         Employee john=new Employee();
         //Setting the salary for harry
           harry.salary=342;
            harry.id=23;
            harry.name="harry";
            harry.printDetails();
            // Setting the salary for john

        john.salary=34;
        john.id=343;
        john.name="john";
        john.printDetails();

        System.out.println(harry.getSalary());





    }
}
