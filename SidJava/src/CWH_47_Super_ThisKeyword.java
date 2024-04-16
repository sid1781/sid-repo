class base2{
    int id;
    public base2(){
        System.out.println("Default Constructor");
    }
     public base2(int i){
         this.id=i;
     }
     public int getId()
     {
         return id;
     }
     public int PrintID()
     {
         this.getId();
         System.out.println("Value was printed");
         return id;
     }
}
class derived2 extends base2{

    derived2(String name, int iam)
    {
        super(iam);
//        System.out.println("Name is " + name);
    }
}

class childDerived2 extends derived2{

       childDerived2(int iam, String name){
           super(name, iam);
           System.out.println("name "+ name + "\n id " + iam);
       }
}
public class CWH_47_Super_ThisKeyword {
    public static void main(String[] args) {

//        childDerived2 dd= new childDerived2(33, "Sid");

        base2 dd= new base2(5);
        System.out.println(dd.PrintID());


    }
}
